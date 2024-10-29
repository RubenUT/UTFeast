import { IonContent, IonPage, IonButton, IonRouterLink } from '@ionic/react';
import './perfil.css';
import EditarPerfil from '../EditarPerfil/EditarPerfil';

const Perfil = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="perfil-container">
          <div className="perfil-header">
            <div className="avatar-placeholder">
              <img src="https://www.famousbirthdays.com/headshots/jh-de-la-cruz-1.jpg" alt="Avatar" className="avatar-img" />
            </div>
            <h2 className="perfil-name">JH Escobar de la Cruz</h2>
            <p className="perfil-email">Dosamarvis@gmail.com</p>
            <p className="perfil-phone">+234 9011039271</p>
            <p className="perfil-info">Soy JH Emilio Escobar de la Cruz influenciador que recoge más de 500 mil seguidores en su cuenta oficial de Instagram y cuatro millones de admiradores en TikTok.</p>
            <IonRouterLink routerLink='/Editar-Perfil' className="change-link">
              Editar
            </IonRouterLink>
          </div>
        
          <div className="perfil-options">
            <IonRouterLink routerLink='/MisProductos' className="perfil-option">
              <div className="option-content">
                <p>Mis productos</p>
              </div>
            </IonRouterLink>
            <IonRouterLink href="https://wa.me/1234567890" className="perfil-option">
              <div className="option-content">
                <p>Mi WhatsApp</p>
              </div>
            </IonRouterLink>
            <IonRouterLink routerLink='/SobreLaEmpresa' className="perfil-option">
              <div className="option-content">
                <p>Sobre la empresa</p>
              </div>
            </IonRouterLink>
          </div>

          <IonRouterLink routerLink='/Editar-Perfil' className="update-button2">
          <IonButton expand="block" >
            Editar perfil
          </IonButton>
          </IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
