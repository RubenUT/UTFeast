import React, { useState, useRef } from 'react';
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
            <IonContent className="ion-padding content" scrollY={true} fullscreen={true}>
            <h1 className='title'>Agrega el Producto</h1>
                <form onSubmit={handleSubmit} className="form">
                    <IonItem className="form-group boton-imagen"  lines="none">
                    <div className="button-container">
                        <label htmlFor="file-input" className="custom-file-label">
                            <IonIcon aria-hidden="true" icon={camera} className="custom-icon" />
                            <span className="custom-file-text">Selecciona una imagen</span>
                        </label>
                        <input 
                            type="file" 
                            id="file-input" 
                            onChange={handleImageChange} 
                            className="file-input-hidden" 
                        />
                    </div>
                    </IonItem>
                    {imagePreviewProduct && (
                        <IonItem className="form-group"  lines="none">
                            <div className="image-preview-wrapper">
                                <IonImg src={imagePreviewProduct} alt="Vista previa de la imagen"  className="image-preview"/>
                            </div>
                        </IonItem>
                    )}
                    <IonItem className="form-group input-container"  lines="none">
                        <IonInput
                            type="text"
                            value={nameProduct}
                            onIonChange={(e) => setNameProduct(e.detail.value!)}
                            placeholder="Ingresa el nombre del producto"
                            label="Nombre:"
                            labelPlacement="floating"

                        />
                    </IonItem>
                    <IonItem className="form-group input-container"  lines="none">
                        <IonInput
                            type="number"
                            value={priceProduct}
                            onIonChange={(e) => setPriceProduct(e.detail.value!)}
                            placeholder="Ingresa el precio"
                            label="Precio:"
                            labelPlacement="floating"
                        />
                    </IonItem>
                    <IonItem className="form-group input-container"  lines="none">
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
                    <IonButton expand="block" type="submit" className="submit-button">
                        Agregar Producto
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default CreateProduct;
