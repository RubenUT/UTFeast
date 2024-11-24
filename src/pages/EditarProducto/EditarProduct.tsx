import React, { useState, useRef, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonTextarea, IonImg, IonIcon } from '@ionic/react';
import './EditarProduct.css';
import { camera } from 'ionicons/icons';
import BackButton from '../../components/BackButton/BackButton';
import { useHistory, useParams } from 'react-router-dom';
import { IProduct } from '../../interfaces/IProduct';
import axios from 'axios';

const EditProduct: React.FC = () => {
    const history = useHistory();
    const [imageProduct, setImageProduct] = useState<File | null>(null);
    const [imagePreviewProduct, setImagePreviewProduct] = useState<string | null>(null);
    const [priceProduct, setPriceProduct] = useState<string>('');
    const [nameProduct, setNameProduct] = useState<string>('');
    const [descriptionProduct, setDescriptionProduct] = useState<string>('');
    const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const textareaRefProduct = useRef<HTMLIonTextareaElement>(null);

    const { _id } = useParams<{ _id: string }>();
    const [productInfo, setProductInfo] = useState<IProduct | null>(null);

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

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5100/utfeast/products/${_id}`);
                const product = response.data.data;
                setProductInfo(product);
                setNameProduct(product.name);
                setPriceProduct(product.price.toString());
                setDescriptionProduct(product.description);
                setImagePreviewProduct(product.image);
                setSelectedCategory(product.categoryId); // Set the selected category
            } catch (e) {
                console.log('Error al cargar informacion del producto:', e)
            }
        };
        fetchProduct();

        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:5100/utfeast/categories");
                setCategories(response.data.data);
            } catch (error) {
                console.error("Error al cargar categorías:", error);
            }
        };
        fetchCategories();

        return () => {
            setImageProduct(null);
            setImagePreviewProduct(null);
            setPriceProduct('');
            setNameProduct('');
            setDescriptionProduct('');
        };
    }, [_id]);

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

        let imageBase64 = null;

        if (imageProduct) {
            imageBase64 = await convertImageToBase64(imageProduct, 0.7);
        } else if (imagePreviewProduct) {
            imageBase64 = imagePreviewProduct;
        }

        const productData = {
            name: nameProduct,
            price: parseFloat(priceProduct),
            description: descriptionProduct,
            image: imageBase64,
            categoryId: selectedCategory
        }

        const token = localStorage.getItem("authToken");

        try {
            const response = await axios.put(`http://localhost:5100/utfeast/products/${_id}`,
                productData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );

            console.log("Producto actualizado exitosamente", response.data);
            history.goBack();
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
        }

        console.log({ imageProduct, nameProduct, priceProduct, descriptionProduct });
    };

    return (
        <IonPage>
            <IonToolbar>
                <BackButton />
            </IonToolbar>
            <IonContent className="ion-padding contentEditProduct" scrollY={true} fullscreen={true}>
                <h1 className='titleEditProduct'>Editar Producto</h1>
                <form onSubmit={handleSubmit} className="formEditProduct">
                    <IonItem className="form-groupEditProduct button-imageEditProduct" lines="none">
                        <div className="button-containerEditProduct">
                            <label htmlFor="file-input" className="custom-file-labelEditProduct">
                                <IonIcon aria-hidden="true" icon={camera} className="custom-iconEditProduct" />
                                <span className="custom-file-textEditProduct">Selecciona una imagen</span>
                            </label>
                            <input
                                type="file"
                                id="file-input"
                                onChange={handleImageChange}
                                className="file-input-hiddenEditProduct"
                            />
                        </div>
                    </IonItem>
                    {imagePreviewProduct && (
                        <IonItem className="form-groupEditProduct" lines="none">
                            <div className="image-preview-wrapperEditProduct">
                                <IonImg src={imagePreviewProduct} alt="Vista previa de la imagen" className="image-previewEditProduct" />
                            </div>
                        </IonItem>
                    )}
                    <IonItem className="form-groupEditProduct input-containerEditProduct" lines="none">
                        <IonInput
                            type="text"
                            value={nameProduct}
                            onIonChange={(e) => setNameProduct(e.detail.value!)}
                            placeholder="Ingresa el nombre del producto"
                            label="Nombre:"
                            labelPlacement="floating"
                        />
                    </IonItem>
                    <IonItem className="form-groupEditProduct input-containerEditProduct" lines="none">
                        <IonInput
                            type="number"
                            value={priceProduct}
                            onIonChange={(e) => setPriceProduct(e.detail.value!)}
                            placeholder="Ingresa el precio"
                            label="Precio:"
                            labelPlacement="floating"
                        />
                    </IonItem>
                    <IonItem className="form-groupEditProduct input-containerEditProduct" lines="none">
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
                    <IonItem className="form-groupEditProduct input-containerEditProduct" lines="none">
                        <IonLabel className="category-labelEditProduct">Categoría:</IonLabel>
                        <select
                            value={selectedCategory || ""}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="category-selectEditProduct"
                        >
                            <option value="" disabled>Selecciona una categoría</option>
                            {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </IonItem>
                    <IonButton expand="block" type="submit" className="submit-buttonEditProduct">
                        Guardar Cambios
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default EditProduct;