/* import {
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
  import "./Email.css";
  
  const Verify: React.FC = () => {
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
              </IonCol>
            </IonRow>
  
            <IonRow className="container-two">
              <IonCol className="form-input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="responsive-svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
                  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                  <path d="M3 19l6 -6" />
                  <path d="M15 13l6 6" />
                </svg>
  
                <IonText>
                  <h1>¡Verifica tu Correo!</h1>
                </IonText>
                <br />
                <IonText>
                  <h3>Te hemos enviado un código de verificación por correo.</h3>
                </IonText>
                <br />
                <IonInput
                  className="custom-input"
                  label="Ingresa tu código"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Ingresa tu código"
                ></IonInput>
              </IonCol>
            </IonRow>
  
            <IonRow className="container-three">
              <IonCol>
                <IonButton className="success-btn" shape="round">
                  Verificar
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Verify;
   */

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
  import "./Email.css";
  
  const Verify: React.FC = () => {
    return (
      <IonPage>
        <IonContent fullscreen>
          <IonGrid className="main-container">
            <IonRow>
              <IonCol size="12" className="container-one-logo">
                <IonAvatar>
                  <img
                    alt="Avatar"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
              </IonCol>
            </IonRow>
  
            <IonRow>
              <IonCol size="12" className="form-input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="responsive-svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
                  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                  <path d="M3 19l6 -6" />
                  <path d="M15 13l6 6" />
                </svg>
  
                <IonText>
                  <h1>¡Verifica tu Correo!</h1>
                </IonText>
                <IonText>
                  <h3>Te hemos enviado un código de verificación por correo.</h3>
                </IonText>
  
                <IonInput
                  className="custom-input"
                  label="Ingresa tu código"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Ingresa tu código"
                />
              </IonCol>
            </IonRow>
  
            <IonRow>
              <IonCol size="12">
                <IonButton className="success-btn" shape="round">
                  Verificar
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Verify;
  