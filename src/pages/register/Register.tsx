import {
    IonAvatar,
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonInput,
    IonPage,
    IonRow,
    IonText,
  } from "@ionic/react";
  import "./Register.css";
  
  const Register: React.FC = () => {
    return (
      <IonPage>
        <IonContent>
          <IonGrid className="main-container">
            <IonRow className="container-one">
              <IonCol>
                <IonRow>
                  <IonCol className="container-one-logo">
                    <IonAvatar>
                      <img
                        alt="Silhouette of a person's head"
                        src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      />
                    </IonAvatar>
                  </IonCol>
                </IonRow>
                <IonRow className="container-one-header">
                  <IonCol>
                    <IonText>
                      <h1>Registrate</h1>
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
            <IonRow className="container-two">
              <IonCol className="form-input">
                <IonInput
                  className="custom-input"
                  label="Correo electronico"
                  type="email"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Ingresa tu correo institucional"
                ></IonInput>
                <br />
                <IonInput
                  className="custom-input"
                  label="Contraseña"
                  type="password"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Contraseña"
                ></IonInput>
                <br />
                <IonInput
                  className="custom-input"
                  label="Confirmar contraseña"
                  type="password"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Confirmar contraseña"
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow className="container-three">
              <IonCol>
                <IonButton className="success-btn" shape="round">
                  Continuar
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Register;
  