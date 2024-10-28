import React, { useState, useRef } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonTextarea, IonImg } from '@ionic/react';
import './CreateProduct.css';

const CreateProduct: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [price, setPrice] = useState<string>('');
    const [name, setName] = useState<string>('');
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
        console.log({ image, name , price, description });
    };

    return ( 
        <IonPage>
            <IonContent className="ion-padding content" scrollY={true} fullscreen={true}>
            <h1 className='title'>Agrega el Producto</h1>
                <form onSubmit={handleSubmit} className="form">
                    <IonItem className="form-group boton-imagen"  lines="none">
                    <div className="button-container">
                        <label htmlFor="file-input" className="custom-file-label">
                            Selecciona una imagen
                        </label>
                        <input 
                            type="file" 
                            id="file-input" 
                            onChange={handleImageChange} 
                            className="file-input-hidden" 
                        />
                    </div>
                    </IonItem>
                    {imagePreview && (
                        <IonItem className="form-group"  lines="none">
                            <div className="image-preview-wrapper">
                                <IonImg src={imagePreview} alt="Vista previa de la imagen"/>
                            </div>
                        </IonItem>
                    )}
                    <IonItem className="form-group input-container"  lines="none">
                        <IonInput
                            type="text"
                            value={name}
                            onIonChange={(e) => setName(e.detail.value!)}
                            placeholder="Ingresa el nombre del producto"
                            label="Nombre"
                            labelPlacement="floating"

                        />
                    </IonItem>
                    <IonItem className="form-group input-container"  lines="none">
                        <IonInput
                            type="number"
                            value={price}
                            onIonChange={(e) => setPrice(e.detail.value!)}
                            placeholder="Ingresa el precio"
                            label="Precio"
                            labelPlacement="floating"
                        />
                    </IonItem>
                    <IonItem className="form-group input-container"  lines="none">
                        <IonTextarea 
                            ref={textareaRef}
                            value={description}
                            onIonInput={(e) => setDescription(e.detail.value!)}
                            placeholder="Describe el producto"
                            label="Descripcion"
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
