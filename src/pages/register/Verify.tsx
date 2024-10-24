import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonText } from "@ionic/react";
import { checkmarkCircle } from "ionicons/icons";
import './Verify.css'
import BackButton from "../../components/backBtn/BackButton";

const Verify: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonGrid className="verify">
                    <BackButton />
                    <IonRow className="verify__top">
                        <IonCol className="verify__col--top">
                            <IonImg
                                className="verify__img"
                                alt="UTFeast Logo" src="src\assets\images\utfeast-logo.svg"
                            ></IonImg>
                        </IonCol>
                    </IonRow>
                    <IonRow className="verify__bottom">
                        <IonCol className="verify__col--bottom">
                            <IonIcon className="verify__icon" icon={checkmarkCircle} />
                            <IonText className="verify__text">¡Todo listo!</IonText>
                            <IonText className="verify__text">Te has registrado correctamente y tu <br /> cuenta se ha verificado</IonText>
                            <IonRouterLink routerLink="/Login">
                                <IonButton className="verify__button" shape="round">Iniciar sesión</IonButton>
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Verify;