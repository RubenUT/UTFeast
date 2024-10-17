import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRouterLink, IonRow, IonText } from "@ionic/react";
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid className="login">
          <IonRow className="login__header">
            <IonCol>
              <IonRow>
                <IonCol className="login__header-logo">
                  <IonAvatar>
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </IonAvatar>
                </IonCol>
              </IonRow>
              <IonRow className="login__header-text">
                <IonCol>
                  <IonText><h1>Iniciar sesión</h1></IonText>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow className="login__form">
            <IonCol className="login__input-container">
              <IonInput className="login__input" label="Correo electronico" type="email" labelPlacement="floating" fill="outline" placeholder="Ingresa tu correo institucional"></IonInput><br />
              <IonInput className="login__input" label="Contraseña" type="password" labelPlacement="floating" fill="outline" placeholder="Contraseña"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="login__bottom">
            <IonCol>
              <IonButton className="login__button" shape="round">Acceder</IonButton><br />
              <IonText className="login__text">¿No tienes una cuenta?<br /></IonText>
              <IonRouterLink routerLink="/register">
                <IonText>Registrate</IonText>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;