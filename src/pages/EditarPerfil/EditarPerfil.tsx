import React, { useState, useRef } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonTextarea, IonImg, IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './EditarPerfil.css';
import BackButton from '../../components/backBtn/BackButton';
import { camera } from 'ionicons/icons';

const EditarPerfil: React.FC = () => {
    const history = useHistory();
    
    const [nombrePerfil, setNombrePerfil] = useState<string>('');
    const [descripcionPerfil, setDescripcionPerfil] = useState<string>('');
    const [imagePerfil, setImagePerfil] = useState<File | null>(null);
    const [imagePreviewPerfil, setImagePreviewPerfil] = useState<string | null>(null);
    const textareaRefPerfil = useRef<HTMLIonTextareaElement>(null);
    const [numberPerfil, setNumberPerfil] = useState<string>('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImagePerfil(file);
            setImagePreviewPerfil(URL.createObjectURL(file));
        }
    };

    const handleDescriptionChange = (event: CustomEvent) => {
        const textarea = event.target as HTMLIonTextareaElement;
        setDescripcionPerfil(textarea.value || '');
    };

    const handleSaveChanges = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ nombrePerfil, descripcionPerfil, imagePerfil });
        history.push('/Perfil');
    };

    const handleCancelChanges = () => {
        setImagePerfil(null);
        setImagePreviewPerfil(null);
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
                    <IonItem className="form-group botonimg"  lines="none">
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
                    {imagePreviewPerfil && (
                        <IonItem className="form-group"  lines="none">
                            <div className="image-preview-wrapper">
                                <IonImg src={imagePreviewPerfil} alt="Vista previa de la imagen" className="image-preview"/>
                            </div>
                        </IonItem>
                    )}
                    
                    <IonItem className="form-group input-container"  lines="none">
                        <IonInput
                            type="text"
                            value={nombrePerfil}
                            onIonChange={(e) => setNombrePerfil(e.detail.value!)}
                            placeholder="Ingresa tu nombre"
                            label="Nombre:"
                            labelPlacement="floating"
                        />
                    </IonItem>

                    <IonItem className="form-group input-container"  lines="none">
                        <IonInput
                            type="number"
                            value={numberPerfil}
                            onIonChange={(e) => setNumberPerfil(e.detail.value!)}
                            placeholder="Ingresa tu numero"
                            label="Numero:"
                            labelPlacement="floating"
                        />
                    </IonItem>

                    <IonItem className="form-group input-container"  lines="none">
                        <IonTextarea
                            ref={textareaRefPerfil}
                            value={descripcionPerfil}
                            onIonInput={handleDescriptionChange}
                            placeholder="Describe algo sobre ti"
                            label="Descripcion:"
                            labelPlacement="floating"
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
