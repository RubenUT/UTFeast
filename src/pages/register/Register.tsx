import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInput,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
} from "@ionic/react";
import "./Register.css";
import BackButton from "../../components/backBtn/BackButton";

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent >
        <BackButton />
        <IonGrid className="register">
          <IonRow className="register__row--top">
            <IonCol className="register__col--top">
              <IonImg
                className="register__logo--img"
                src="https://docs-demo.ionic.io/assets/madison.jpg"
                alt="The Wisconsin State Capitol building in Madison, WI at night"
              ></IonImg>
              <IonText className="register__text"><h1>Registrate</h1></IonText>
            </IonCol>
          </IonRow>
          <IonRow className="register__row--form">
            <IonCol className="register__col--form">
              <IonInput className="register__input" label="Correo institucional" type="email" labelPlacement="floating" fill="outline" placeholder="Ingresa tu correo institucional"></IonInput>
              <IonInput className="register__input" label="Contraseña" type="password" labelPlacement="floating" fill="outline" placeholder="Contraseña"></IonInput>
              <IonInput className="register__input" label="Confirmar contraseña" type="password" labelPlacement="floating" fill="outline" placeholder="Contraseña "></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="register__row--bottom">
            <IonCol className="register__col--bottom">
              <IonRouterLink routerLink="/verify">
              <IonButton className="register__button" shape="round">Continuar</IonButton>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
