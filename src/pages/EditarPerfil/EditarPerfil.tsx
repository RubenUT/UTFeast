import React, { useState, useRef, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonTextarea, IonImg, IonIcon } from '@ionic/react';
import { useHistory, useParams } from 'react-router-dom';
import './EditarPerfil.css';
import BackButton from '../../components/BackButton/BackButton';
import { camera } from 'ionicons/icons';
import axios from 'axios';

const EditarPerfil: React.FC = () => {
    const history = useHistory();

    const [nombrePerfil, setNombrePerfil] = useState<string>('');
    const [descripcionPerfil, setDescripcionPerfil] = useState<string>('');
    const [imagePerfil, setImagePerfil] = useState<File | null>(null);
    const [imagePreviewPerfil, setImagePreviewPerfil] = useState<string | null>(null);
    const textareaRefPerfil = useRef<HTMLIonTextareaElement>(null);
    const [numberPerfil, setNumberPerfil] = useState<string>('');
    const { _id } = useParams<{ _id: string }>();

    useEffect(() => {
        setImagePerfil(null);
        setImagePreviewPerfil(null);
        setNumberPerfil('');
        setNombrePerfil('');
        setDescripcionPerfil('');
    }, [_id]);

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

    const token = localStorage.getItem("authToken");

    useEffect(()=>{
        const fetchUser = async () => {
            try{
                const userResponse = await axios.get(`http://localhost:5100/utfeast/users/${_id}`,{
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const user = userResponse.data.data;
                setNombrePerfil(user.name);
                setNumberPerfil(user.phone);
                setDescripcionPerfil(user.description);
                setImagePreviewPerfil(user.image);
            }catch(e){
                console.log('Error al cargar informacion del usuario:', e)
            }
        };
        fetchUser();
    }, [_id]);

    const handleSaveChanges = async (e: React.FormEvent) => {
        e.preventDefault();

        let imageBase64 = null;

        if (imagePerfil) {
            imageBase64 = await convertImageToBase64(imagePerfil, 0.7);
        } else if (imagePreviewPerfil) {
            imageBase64 = imagePreviewPerfil;
        }

        const userData = {
            name: nombrePerfil,
            phone: numberPerfil,
            description: descripcionPerfil,
            image: imageBase64,
        };


        try {
            const response = await axios.put(`http://localhost:5100/utfeast/users/${_id}`,
                userData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );

            history.push(`/Perfil`);
        } catch (error) {
            console.error("Error al actualizar el perfil:", error);
        }
    };

    const handleCancelChanges = () => {
        setImagePerfil(null);
        setImagePreviewPerfil(null);
        history.push('/Perfil');
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
                    <IonItem className="form-group botonimg" lines="none">
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
                        <IonItem className="form-group" lines="none">
                            <div className="image-preview-wrapper">
                                <IonImg src={imagePreviewPerfil} alt="Vista previa de la imagen" className="image-preview" />
                            </div>
                        </IonItem>
                    )}

                    <IonItem className="form-group input-container" lines="none">
                        <IonInput
                            type="text"
                            value={nombrePerfil}
                            onIonChange={(e) => setNombrePerfil(e.detail.value!)}
                            placeholder="Ingresa tu nombre"
                            label="Nombre:"
                            labelPlacement="floating"
                        />
                    </IonItem>

                    <IonItem className="form-group input-container" lines="none">
                        <IonInput
                            type="number"
                            value={numberPerfil}
                            onIonChange={(e) => setNumberPerfil(e.detail.value!)}
                            placeholder="Ingresa tu numero"
                            label="Numero:"
                            labelPlacement="floating"
                        />
                    </IonItem>

                    <IonItem className="form-group input-container" lines="none">
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
