import { IonContent, IonPage, IonButton, IonRouterLink, useIonRouter, IonIcon } from '@ionic/react';
import './perfil.css';
import { pricetag, logoWhatsapp,informationCircleOutline, logOutOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import IUser from '../../interfaces/IUser';
import axios from 'axios';

const Perfil = () => {

  const router = useIonRouter();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect( () => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");
      try{
        const response = await axios.get("http://localhost:5100/utfeast/users/me", {
          headers : {
            Authorization: `Bearer ${token}`
          },
        });

        setUser(response.data.data);
      }catch(e){
        console.log('Error al cargar el usuario:', e)
      }
    };
    fetchUser();
  }, [router]);

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
              <img src={user?.image} alt="Avatar" className="avatar-img" />
            </div>
            <h2 className="perfil-name">{user?.name}</h2>
            <p className="perfil-email">{user?.email}</p>
            <p className="perfil-phone">{user?.phone}</p>
            <p className="perfil-info">{user?.description}</p>
            <IonRouterLink routerLink={`/EditarPerfil/${user?._id}`} className="change-link">
              Editar
            </IonRouterLink>
          </div>
        
          <div className="perfil-options">
            <IonRouterLink routerLink={`/MisProductos/${user?._id}`} className="perfil-option">
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
