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
import BackButton from "../../components/BackButton/BackButton";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const history = useHistory();

  const validateForm = () => {
    const errors: any = {};
    if (!name) {
      errors.name = "El nombre es requerido";
    }
    if (!email) {
      errors.email = "El correo es requerido";
    }
    if (!password) {
      errors.password = "La contraseña es requerida";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Ingresa nuevamente tu contraseña para confirmar";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }

    return errors;
  }

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5100/utfeast/register", {
        name,
        email,
        password,
      });
      console.log("Registro exitoso:", response.data);
      history.push("/verify");
    } catch (error) {
      console.error("Error al registrarse:", error);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" scrollEvents={true}>
        <BackButton />
        <IonGrid className="register">
          <IonRow className="register__row--top">
            <IonCol className="register__col--top">
              <IonImg
                className="register__logo--img"
                alt="UTFeast Logo" src="src\assets\images\utfeast-logo.svg"
              ></IonImg>
              <IonText className="register__text"><h1>Registrate</h1></IonText>
            </IonCol>
          </IonRow>
          <IonRow className="register__row--form">
            <IonCol className="register__col--form">
              <IonInput
                className="register__input"
                label="Nombre"
                type="text"
                labelPlacement="floating"
                fill="outline"
                placeholder="Ingresa tu nombre"
                value={name}
                onIonInput={(e) => setName(e.detail.value!)}
              ></IonInput>
              {errors.name && <IonText className="register__error">{errors.name}</IonText>}
              <IonInput
                className="register__input"
                label="Correo institucional"
                type="email"
                labelPlacement="floating"
                fill="outline"
                placeholder="Ingresa tu correo institucional"
                value={email}
                onIonInput={(e) => setEmail(e.detail.value!)}
              ></IonInput>
              {errors.email && <IonText className="register__error">{errors.email}</IonText>}
              <IonInput
                className="register__input"
                label="Contraseña"
                type="password"
                labelPlacement="floating"
                fill="outline"
                placeholder="Contraseña"
                value={password}
                onIonInput={(e) => setPassword(e.detail.value!)}
              ></IonInput>
              {errors.password && <IonText className="register__error">{errors.password}</IonText>}
              <IonInput
                className="register__input"
                label="Confirmar contraseña"
                type="password"
                labelPlacement="floating"
                fill="outline"
                placeholder="Contraseña"
                value={confirmPassword}
                onIonInput={(e) => setConfirmPassword(e.detail.value!)}
              ></IonInput>
              {errors.password && <IonText className="register__error">{errors.password}</IonText>}
            </IonCol>
          </IonRow>
          <IonRow className="register__row--bottom">
            <IonCol className="register__col--bottom">
              <IonButton className="register__button" shape="round" onClick={handleSubmit}>Continuar</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
