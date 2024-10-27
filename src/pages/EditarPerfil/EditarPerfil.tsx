import React, { useState, useRef } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonTextarea, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './EditarPerfil.css';
import BackButton from '../../components/backBtn/BackButton';

const EditarPerfil: React.FC = () => {
    const history = useHistory();
    
    const [nombre, setNombre] = useState<string>('');
    const [descripcion, setDescripcion] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const textareaRef = useRef<HTMLIonTextareaElement>(null);
    const [number, setNumber] = useState<string>('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleDescriptionChange = (event: CustomEvent) => {
        const textarea = event.target as HTMLIonTextareaElement;
        setDescripcion(textarea.value || '');
    };

    const handleSaveChanges = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ nombre, descripcion, image });
        history.push('/Perfil');
    };

    const handleCancelChanges = () => {
        setImage(null);
        setImagePreview(null);
        history.push('/tab3');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <BackButton />
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <form onSubmit={handleSaveChanges} className="form">
                    <IonItem className="form-group">
                        <IonLabel position="stacked">Imagen de Perfil:</IonLabel>
                        <input type="file" onChange={handleImageChange} className="file-input" />
                    </IonItem>
                    {imagePreview && (
                        <IonItem className="form-group image-preview">
                            <IonImg src={imagePreview} alt="Vista previa de la imagen de perfil" />
                        </IonItem>
                    )}
                    
                    <IonItem className="form-group">
                        <IonLabel position="stacked">Nombre de Usuario</IonLabel>
                        <IonInput
                            type="text"
                            value={nombre}
                            onIonChange={(e) => setNombre(e.detail.value!)}
                            placeholder="Ingresa tu nombre"
                        />
                    </IonItem>

                    <IonItem className="form-group">
                        <IonLabel position="stacked">Numero</IonLabel>
                        <IonInput
                            type="number"
                            value={number}
                            onIonChange={(e) => setNumber(e.detail.value!)}
                            placeholder="Ingresa tu numero"
                        />
                    </IonItem>

                    <IonItem className="form-group">
                        <IonLabel position="stacked">Descripción</IonLabel>
                        <IonTextarea
                            ref={textareaRef}
                            value={descripcion}
                            onIonInput={handleDescriptionChange}
                            placeholder="Describe algo sobre ti"
                            autoGrow={true}
                            counter={true}
                            maxlength={100}
                        />
                    </IonItem>

                    <div className="button-container">
                        <IonButton 
                            expand="block" 
                            type="submit" 
                            className="save-btn"
                            fill="solid"
                        >
                            Guardar cambios
                        </IonButton>
                        <IonButton 
                            expand="block"
                            className="cancel-btn"
                            fill="solid"
                            onClick={handleCancelChanges}
                        >
                            Deshacer cambios
                        </IonButton>
                    </div>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default EditarPerfil;
