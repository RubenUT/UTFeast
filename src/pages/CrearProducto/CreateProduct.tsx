import React, { useState, useRef, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonTextarea, IonImg, IonIcon } from '@ionic/react';
import './CreateProduct.css';
import { camera } from 'ionicons/icons';

const CreateProduct: React.FC = () => {
    const [imageProduct, setImageProduct] = useState<File | null>(null);
    const [imagePreviewProduct, setImagePreviewProduct] = useState<string | null>(null);
    const [priceProduct, setPriceProduct] = useState<string>('');
    const [nameProduct, setNameProduct] = useState<string>('');
    const [descriptionProduct, setDescriptionProduct] = useState<string>('');
    const textareaRefProduct = useRef<HTMLIonTextareaElement>(null);

    useEffect(() => {
            setImageProduct(null);
            setImagePreviewProduct(null);
            setPriceProduct('');
            setNameProduct('');
            setDescriptionProduct('');
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageProduct(file);
            setImagePreviewProduct(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ imageProduct, nameProduct , priceProduct, descriptionProduct });
    };

    return ( 
        <IonPage>
            <IonContent className="ion-padding contentCreateProduct" scrollY={true} fullscreen={true}>
                <h1 className='titleCreateProduct'>Agrega el Producto</h1>
                <form onSubmit={handleSubmit} className="formCreateProduct">
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
                                <IonImg src={imagePreviewProduct} alt="Vista previa de la imagen" className="image-previewCreateProduct"/>
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
                    <IonButton expand="block" type="submit" className="submit-buttonCreateProduct">
                        Agregar Producto
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default CreateProduct;
