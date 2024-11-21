import { IonContent, IonPage, IonButton, IonRouterLink, IonHeader, IonToolbar } from '@ionic/react';
import './PerfilUser.css';
import EditarPerfil from '../EditarPerfil/EditarPerfil';
import BackButton from '../../components/BackButton/BackButton';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import IUser from '../../interfaces/IUser';
import axios from 'axios';

const PerfilUsers = () => {
  const { _id } = useParams<{ _id: string }>();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("No se encontró el token de autenticación");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5100/utfeast/users/${_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.data);
      } catch (error) {
        console.error("Error al cargar el perfil del usuario:", error);
      }
    };

    fetchUser();
  }, [_id]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <BackButton />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="perfil-container">
          {user ? (
            <>
              <div className="perfil-header">
                <div className="avatar-placeholder">
                  <img src={user.image || 'https://via.placeholder.com/150'} alt="Avatar" className="avatar-img" />
                </div>
                <h2 className="perfil-name">{user.name}</h2>
                <p className="perfil-email">{user.email}</p>
                <p className="perfil-phone">{user.phone}</p>
                <p className="perfil-info">{user.description}</p>
              </div>

              <div className="perfil-options">
                <IonRouterLink routerLink={`/ProductosVendedor/${user._id}`} className="perfil-option">
                  <div className="option-content">
                    <p>Productos del vendedor</p>
                  </div>
                </IonRouterLink>
                <IonRouterLink href={`https://wa.me/${user.phone}`} className="perfil-option">
                  <div className="option-content">
                    <p>Contactar por WhatsApp</p>
                  </div>
                </IonRouterLink>
              </div>
            </>
          ) : (
            <p>Cargando información del usuario...</p>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PerfilUsers;
