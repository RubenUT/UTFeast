import { IonContent, IonPage, IonButton, IonRouterLink, useIonRouter, IonIcon } from '@ionic/react';
import './perfil.css';
import { pricetag, logoWhatsapp,informationCircleOutline, logOutOutline } from 'ionicons/icons';

const Perfil = () => {

  const router = useIonRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  }

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
                <IonIcon icon={pricetag} className='option-icon'/>
                <p>Mis productos</p>
              </div>
            </IonRouterLink>
            <IonRouterLink href="https://wa.me/1234567890" className="perfil-option">
              <div className="option-content">
                <IonIcon icon={logoWhatsapp} className='option-icon'/>
                <p>Mi WhatsApp</p>
              </div>
            </IonRouterLink>
            <IonRouterLink routerLink='/SobreLaEmpresa' className="perfil-option">
              <div className="option-content">
                <IonIcon icon={informationCircleOutline} className='option-icon'/>
                <p>Sobre la empresa</p>
              </div>
            </IonRouterLink>
          </div>

            <IonButton expand="block" onClick={handleLogout} className="logout-button">
            <IonIcon icon={logOutOutline} style={{ color: 'white', fontSize: '24px' }}/>
            </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
