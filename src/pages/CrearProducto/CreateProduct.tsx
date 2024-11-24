import React, { useState, useRef, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonTextarea, IonImg, IonIcon, IonAlert, IonText } from '@ionic/react';
import './CreateProduct.css';
import { camera } from 'ionicons/icons';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import IUser from '../../interfaces/IUser';

const CreateProduct: React.FC = () => {
    const history = useHistory();
    const [user, setUser] = useState<IUser | null>(null);
    const [imageProduct, setImageProduct] = useState<File | null>(null);
    const [imagePreviewProduct, setImagePreviewProduct] = useState<string | null>(null);
    const [priceProduct, setPriceProduct] = useState<string>('');
    const [nameProduct, setNameProduct] = useState<string>('');
    const [descriptionProduct, setDescriptionProduct] = useState<string>('');
    const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const textareaRefProduct = useRef<HTMLIonTextareaElement>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("authToken");
            try {
                const response = await axios.get("http://localhost:5100/utfeast/users/me", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });

                setUser(response.data.data);
            } catch (e) {
                console.log('Error al cargar el usuario:', e);
            }
        };
        fetchUser();

        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:5100/utfeast/categories");
                setCategories(response.data.data);
            } catch (error) {
                console.error("Error al cargar categorías:", error);
            }
        };
        fetchCategories();
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageProduct(file);
            setImagePreviewProduct(URL.createObjectURL(file));
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!imageProduct) newErrors.imageProduct = "La imagen del producto es requerida.";
        if (!nameProduct) newErrors.nameProduct = "El nombre del producto es requerido.";
        if (!priceProduct) newErrors.priceProduct = "El precio del producto es requerido.";
        if (!descriptionProduct) newErrors.descriptionProduct = "La descripción del producto es requerida.";
        if (!selectedCategory) newErrors.selectedCategory = "La categoría del producto es requerida.";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const token = localStorage.getItem("authToken");

        try {
            const userResponse = await axios.get("http://localhost:5100/utfeast/users/me", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const user = userResponse.data.data;
            if (!user.phone) {
                setShowAlert(true);
                return;
            }
        } catch (error) {
            console.error("Error al verificar el usuario:", error);
            return;
        }

        const convertImageToBase64 = (file: File, quality: number = 0.7) => {
            return new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = new Image();
                    img.src = event.target?.result as string;

                    img.onload = () => {
                        const canvas = document.createElement("canvas");
                        const ctx = canvas.getContext("2d");

                        const maxWidth = 800;
                        const scaleFactor = img.width > maxWidth ? maxWidth / img.width : 1;
                        const width = img.width * scaleFactor;
                        const height = img.height * scaleFactor;

                        canvas.width = width;
                        canvas.height = height;

                        ctx?.drawImage(img, 0, 0, width, height);

                        const base64Image = canvas.toDataURL("image/jpeg", quality);
                        resolve(base64Image);
                    };

                    img.onerror = reject;
                };

                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        };

        const imageBase64 = imageProduct ? await convertImageToBase64(imageProduct, 0.7) : null;

        const productData = {
            name: nameProduct,
            price: Number(priceProduct),
            description: descriptionProduct,
            image: imageBase64,
            categoryId: selectedCategory
        };

        try {
            const response = await axios.post(
                "http://localhost:5100/utfeast/products/create",
                productData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
            );

            console.log("Producto agregado exitosamente", response.data);
            const productId = response.data.data._id;
            history.push(`/CreatedProduct/${productId}`);
            window.location.reload();
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <IonPage>
            <IonContent className="ion-padding contentCreateProduct" scrollY={true} fullscreen={true}>
                <h1 className='titleCreateProduct'>Agrega el Producto</h1>
                <form onSubmit={handleSubmit} className="formCreateProduct" id='formProduct'>
                    <IonItem className="form-groupCreateProduct button-imageCreateProduct" lines="none">
                        <div className="button-containerCreateProduct">
                            <label htmlFor="file-input" className="custom-file-labelCreateProduct">
                                <IonIcon aria-hidden="true" icon={camera} className="custom-iconCreateProduct" />
                                <span className="custom-file-textCreateProduct">Selecciona una imagen</span>
                            </label>
                            <input
                                type="file"
                                id="file-input"
                                onChange={handleImageChange}
                                className="file-input-hiddenCreateProduct"
                            />
                        </div>
                    </IonItem>
                    {imagePreviewProduct && (
                        <IonItem className="form-groupCreateProduct" lines="none">
                            <div className="image-preview-wrapperCreateProduct">
                                <IonImg src={imagePreviewProduct} alt="Vista previa de la imagen" className="image-previewCreateProduct" />
                            </div>
                        </IonItem>
                    )}
                    <IonItem className="form-groupCreateProduct input-containerCreateProduct" lines="none">
                        <IonInput
                            type="text"
                            value={nameProduct}
                            onIonChange={(e) => setNameProduct(e.detail.value!)}
                            placeholder="Ingresa el nombre del producto"
                            label="Nombre:"
                            labelPlacement="floating"
                        />
                    </IonItem>
                    {errors.nameProduct && <IonText color="danger">{errors.nameProduct}</IonText>}
                    <IonItem className="form-groupCreateProduct input-containerCreateProduct" lines="none">
                        <IonInput
                            type="number"
                            value={priceProduct}
                            onIonChange={(e) => setPriceProduct(e.detail.value!)}
                            placeholder="Ingresa el precio"
                            label="Precio:"
                            labelPlacement="floating"
                        />
                    </IonItem>
                    {errors.priceProduct && <IonText color="danger">{errors.priceProduct}</IonText>}
                    <IonItem className="form-groupCreateProduct input-containerCreateProduct" lines="none">
                        <IonTextarea
                            ref={textareaRefProduct}
                            value={descriptionProduct}
                            onIonInput={(e) => setDescriptionProduct(e.detail.value!)}
                            placeholder="Describe el producto"
                            label="Descripcion:"
                            labelPlacement="floating"
                            counter={true}
                            maxlength={200}
                            autoGrow={true}
                        />
                    </IonItem>
                    {errors.descriptionProduct && <IonText color="danger">{errors.descriptionProduct}</IonText>}
                    <IonItem className="form-groupCreateProduct input-containerCreateProduct" lines="none">
                        <IonLabel className="category-labelCreateProduct">Categoría:</IonLabel>
                        <select
                            value={selectedCategory || ""}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="category-selectCreateProduct"
                        >
                            <option value="" disabled>Selecciona una categoría</option>
                            {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </IonItem>
                    {errors.selectedCategory && <IonText color="danger">{errors.selectedCategory}</IonText>}
                    <IonButton expand="block" type="submit" className="submit-buttonCreateProduct">
                        Agregar Producto
                    </IonButton>
                </form>
                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header={'Número de teléfono requerido'}
                    message={'No puedes crear un producto sin un número de teléfono. ¿Quieres redirigirte a editar tu perfil?'}
                    buttons={[
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                setShowAlert(false);
                            }
                        },
                        {
                            text: 'Editar perfil',
                            handler: () => {
                                history.push(`/EditarPerfil/${user?._id}`);
                            }
                        }
                    ]}
                />
            </IonContent>
        </IonPage>
    );
};

export default CreateProduct;
