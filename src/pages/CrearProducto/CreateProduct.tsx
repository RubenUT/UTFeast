import React, { useState, useRef } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonTextarea, IonImg } from '@ionic/react';
import './CreateProduct.css';

const CreateProduct: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [price, setPrice] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const textareaRef = useRef<HTMLIonTextareaElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ image, price, description });
    };

    return (
        <IonPage>
            <IonContent className="ion-padding content" scrollY={true} fullscreen={true}>
            <h1 className='title'>Agrega el Producto</h1>
                <form onSubmit={handleSubmit} className="form">
                    <IonItem className="form-group">
                        <IonLabel position="stacked">Imagen</IonLabel>
                        <input type="file" onChange={handleImageChange} className="file-input" />
                    </IonItem>
                    {imagePreview && (
                        <IonItem className="form-group image-preview">
                            <IonImg src={imagePreview} alt="Vista previa de la imagen" />
                        </IonItem>
                    )}
                    <IonItem className="form-group">
                        <IonLabel position="stacked">Precio</IonLabel>
                        <IonInput
                            type="number"
                            value={price}
                            onIonChange={(e) => setPrice(e.detail.value!)}
                            placeholder="Ingresa el precio"
                            fill="outline"
                        />
                    </IonItem>
                    <IonItem className="form-group">
                        <IonLabel position="stacked">Descripción</IonLabel>
                        <IonTextarea
                            ref={textareaRef}
                            value={description}
                            onIonInput={(e) => setDescription(e.detail.value!)}
                            placeholder="Describe el producto"
                            fill="outline"
                            counter={true}
                            maxlength={200}
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
