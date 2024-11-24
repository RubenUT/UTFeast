import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRouterLink, IonRow, IonText } from "@ionic/react";
import './Login.css';
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5100/utfeast/login", {
        email,
        password,
      });

      const token = response.data.token;

      localStorage.setItem("authToken", token);

      history.push('/tab1')
      window.location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error al iniciar sesión", error.response?.data || error.message);
      } else {
        console.error("Error al iniciar sesión", error);
      }
    }
  };
  return (
    <IonPage>
      <IonContent>
        <IonGrid className="login">
          <IonRow className="login__header">
            <IonCol>
              <IonRow>
                <IonCol className="login__header-logo">
                  <IonAvatar>
                    <img alt="UTFeast Logo" src="src\assets\images\utfeast-logo.svg" />
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
              <IonInput className="login__input"
                label="Correo electronico"
                type="email"
                labelPlacement="floating"
                fill="outline"
                placeholder="Ingresa tu correo institucional"
                value={email}
                onIonInput={(e) => setEmail(e.detail.value!)}
              ></IonInput><br />
              <IonInput className="login__input"
                label="Contraseña"
                type="password"
                labelPlacement="floating"
                fill="outline"
                placeholder="Contraseña"
                value={password}
                onIonInput={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="login__bottom">
            <IonCol>
              <IonButton className="login__button" shape="round" onClick={handleLogin}>Acceder</IonButton><br />
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