import React, { useState, useRef } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonTextarea, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './EditarPerfil.css';

const EditarPerfil: React.FC = () => {
    const history = useHistory();
    
    const [nombre, setNombre] = useState<string>('NombreUsuario');
    const [descripcion, setDescripcion] = useState<string>('Esta es la descripción del usuario.');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const textareaRef = useRef<HTMLIonTextareaElement>(null);

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
        adjustTextareaHeight();
    };

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    const handleSaveChanges = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            nombre,
            descripcion,
            image
        });
        history.push('/tab3');
    };

    const handleCancelChanges = () => {
        setNombre('NombreUsuario');
        setDescripcion('Esta es la descripción del usuario.');
        setImage(null);
        setImagePreview(null);
        history.push('/tab3');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Editar Perfil</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <form onSubmit={handleSaveChanges} className="form">

                <IonItem className="form-group">
                        <IonLabel position="stacked">Imagen de Perfil:</IonLabel>
                        <input type="file" id="image" onChange={handleImageChange} />
                    </IonItem>

                    {imagePreview && (
                        <IonItem className="form-group">
                            <IonImg src={imagePreview} alt="Vista previa de la imagen de perfil" />
                        </IonItem>
                    )}
                    
                    <IonItem className="form-group">
                        <IonLabel position="stacked">Nombre de Usuario:</IonLabel>
                        <IonInput
                            type="text"
                            value={nombre}
                            onIonChange={(e) => setNombre(e.detail.value!)}
                        />
                    </IonItem>

                    <IonItem className="form-group">
                        <IonLabel position="stacked">Descripción:</IonLabel>
                        <IonTextarea
                            ref={textareaRef}
                            value={descripcion}
                            onIonInput={handleDescriptionChange}
                            autoGrow={true}
                            className="auto-expand"
                        />
                    </IonItem>

                    <div className="button-container">
                    <IonButton 
                        expand="block" 
                        type="submit" 
                        className="save-btn" 
                        fill="solid"
                        color="#4CAF50"
                    >
                        Guardar cambios
                    </IonButton>
                    <IonButton 
                        expand="block" 
                        color="#f44336"
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
