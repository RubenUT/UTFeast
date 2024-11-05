import { IonContent, IonPage, IonButton, IonRouterLink, IonHeader, IonToolbar } from '@ionic/react';
import './PerfilUser.css';
import EditarPerfil from '../EditarPerfil/EditarPerfil';
import BackButton from '../../components/BackButton/BackButton';

const PerfilUsers = () => {
    const userInfo = [
        {
          name: 'JH Escobar de la Cruz',
          email: 'Dosamarvis@gmail.com',
          phone: '+234 9011039271',
          description: 'Soy JH Emilio Escobar de la Cruz influenciador que recoge más de 500 mil seguidores en su cuenta oficial de Instagram y cuatro millones de admiradores en TikTok.',
          img: 'https://www.famousbirthdays.com/headshots/jh-de-la-cruz-1.jpg'
        }
      ];
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <BackButton />
            </IonToolbar>
        </IonHeader>
      <IonContent className="ion-padding">
      <div className="perfil-container">
          {userInfo.map((user, index) => (
            <div key={index} className="perfil-header">
              <div className="avatar-placeholder">
                <img src={user.img} alt="Avatar" className="avatar-img" />
              </div>
              <h2 className="perfil-name">{user.name}</h2>
              <p className="perfil-email">{user.email}</p>
              <p className="perfil-phone">{user.phone}</p>
              <p className="perfil-info">{user.description}</p>
            </div>
          ))}
        
          <div className="perfil-options">
            <IonRouterLink routerLink='/ProductosVendedor' className="perfil-option">
              <div className="option-content">
                <p>Productos vendedor</p>
              </div>
            </IonRouterLink>
            <IonRouterLink href="https://wa.me/1234567890" className="perfil-option">
              <div className="option-content">
                <p>Mi WhatsApp</p>
              </div>
            </IonRouterLink>

          </div>    
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PerfilUsers;
