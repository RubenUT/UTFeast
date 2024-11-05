import { IonPage, IonImg, IonRouterLink } from "@ionic/react";

const ErrorScreen = () => (
    <IonPage>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                textAlign: 'center'
            }}
        >
            <IonImg
                src="https://img.freepik.com/free-vector/401-error-unauthorized-concept-illustration_114360-1883.jpg?t=st=1730574618~exp=1730578218~hmac=818d3f8a0bdfc3fe8f61c74d4a7b36c7807cc69a6e85e8be0bea1bc12ceee30a&w=740"
                alt="Imagen de error de autorización"
                style={{width:'300px', marginBottom:'30px'}}
            />
            <h1>¡Oops!</h1>
            <p style={{fontSize:'17.5px'}}>Necesitas iniciar sesión <br/>para ver este contenido</p>
            <IonRouterLink routerLink="/login">Iniciar sesión</IonRouterLink>
        </div>
    </IonPage>
);

export default ErrorScreen;
