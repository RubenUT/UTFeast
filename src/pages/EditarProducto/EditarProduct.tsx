import React, { useState, useEffect } from 'react';
import { IonPage, IonToolbar, IonContent, IonButton, IonItem, IonLabel, IonImg, IonIcon } from '@ionic/react';
import './EditarProduct.css';
import { camera } from 'ionicons/icons';
import BackButton from '../../components/BackButton/BackButton';
import { useHistory, useParams } from 'react-router-dom';
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
    const { _id } = useParams<{ _id: string }>();

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
                setNameProduct(product.name);
                setPriceProduct(product.price.toString());
                setDescriptionProduct(product.description);
                setImagePreviewProduct(product.image);
                setSelectedCategory(product.categoryId);
            } catch (e) {
                console.error('Error al cargar la información del producto:', e);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5100/utfeast/categories');
                setCategories(response.data.data);
            } catch (error) {
                console.error('Error al cargar categorías:', error);
            }
        };

        fetchProduct();
        fetchCategories();
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
            alert('Por favor completa todos los campos.');
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
            categoryId: selectedCategory,
        };

        const token = localStorage.getItem('authToken');

        try {
            await axios.put(
                `http://localhost:5100/utfeast/products/${_id}`,
                productData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            history.goBack();
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    return (
        <IonPage>
            <IonToolbar>
                <BackButton />
            </IonToolbar>
            <IonContent className="ion-padding contentEditProduct" scrollY={true} fullscreen={true}>
                <form onSubmit={handleSubmit} className="formEditProduct">
                    <IonItem lines="none" className="form-groupEditProduct button-imageEditProduct">
                        <label htmlFor="file-input" className="custom-file-labelEditProduct">
                            <IonIcon aria-hidden="true" icon={camera} className="custom-iconEditProduct" />
                            <span>Selecciona una imagen</span>
                        </label>
                        <input
                            type="file"
                            id="file-input"
                            onChange={handleImageChange}
                            className="file-input-hiddenEditProduct"
                        />
                    </IonItem>
                    {imagePreviewProduct && (
                        <div className="image-preview-wrapperEditProduct">
                            <IonImg src={imagePreviewProduct} alt="Vista previa de la imagen" />
                        </div>
                    )}
                    <div className="input-containerEditProduct">
                        <label htmlFor="nameProduct">Nombre:</label>
                        <input
                            id="nameProduct"
                            type="text"
                            value={nameProduct}
                            onChange={(e) => setNameProduct(e.target.value)}
                            placeholder="Ingresa el nombre del producto"
                            className="input-field"
                        />
                    </div>
                    <div className="input-containerEditProduct">
                        <label htmlFor="priceProduct">Precio:</label>
                        <input
                            id="priceProduct"
                            type="number"
                            value={priceProduct}
                            onChange={(e) => setPriceProduct(e.target.value)}
                            placeholder="Ingresa el precio"
                            className="input-field"
                        />
                    </div>
                    <div className="input-containerEditProduct">
                        <label htmlFor="descriptionProduct">Descripción:</label>
                        <textarea
                            id="descriptionProduct"
                            value={descriptionProduct}
                            onChange={(e) => setDescriptionProduct(e.target.value)}
                            placeholder="Describe el producto"
                            className="textarea-field"
                        />
                    </div>
                    <div className="input-containerEditProduct">
                        <label htmlFor="category">Categoría:</label>
                        <select
                            id="category"
                            value={selectedCategory || ''}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="category-selectEditProduct"
                        >
                            <option value="" disabled>
                                Selecciona una categoría
                            </option>
                            {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <IonButton expand="block" type="submit" className="submit-buttonEditProduct">
                        Guardar Cambios
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default EditProduct;
