import { IonContent, IonPage, IonButton, IonRouterLink } from '@ionic/react';
import './perfil.css';

const Perfil = () => {
    
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="perfil-container">
          <div className="perfil-header">
            <div className="avatar-placeholder"></div>
            <h2>NombreUsuario</h2>
            <p className="descripcion">Esta es la descripción del usuario.Esta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuarioEsta es la descripción del usuario</p>
          </div>
        
        <IonRouterLink routerLink='/Editar-Perfil'>
            <IonButton expand="block" className="edit-button">
            Editar Perfil
          </IonButton>
        </IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
