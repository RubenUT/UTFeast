import React, { useState, useRef, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonTextarea, IonImg, IonIcon } from '@ionic/react';
import './CreateProduct.css';
import { camera } from 'ionicons/icons';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateProduct: React.FC = () => {
    const [imageProduct, setImageProduct] = useState<File | null>(null);
    const [imagePreviewProduct, setImagePreviewProduct] = useState<string | null>(null);
    const [priceProduct, setPriceProduct] = useState<string>('');
    const [nameProduct, setNameProduct] = useState<string>('');
    const [descriptionProduct, setDescriptionProduct] = useState<string>('');
    const textareaRefProduct = useRef<HTMLIonTextareaElement>(null);
    const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const history = useHistory();

    useEffect(() => {
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!nameProduct || !priceProduct || !descriptionProduct || !selectedCategory) {
            alert("Por favor completa todos los campos.");
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

        const token = localStorage.getItem("authToken");

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

                    <IonItem className="form-groupCreateProduct input-containerCreateProduct" lines="none">
                        <IonLabel>Selecciona una Categoría:</IonLabel>
                        <select
                            value={selectedCategory || ""}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="" disabled>Selecciona una categoría</option>
                            {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </IonItem>
                    <IonButton expand="block" type="submit" className="submit-buttonCreateProduct">
                        Agregar Producto
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default CreateProduct;
