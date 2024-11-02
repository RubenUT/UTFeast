import React from 'react';
import { IonPage, IonContent, IonText, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonToolbar } from '@ionic/react';
import { call, mail, location } from 'ionicons/icons';
import './EmpresaInfo.css';
import BackButton from '../../components/BackButton/BackButton';

const CompanyInfo: React.FC = () => {
  return (
    <IonPage>
        <IonToolbar>
            <BackButton />
        </IonToolbar>
      <IonContent className="ion-padding company-content">
        <IonImg className="company-banner" src="https://lh6.googleusercontent.com/proxy/Z44BmfZJpBhGzltqzm4fhZH-aJHY1AdaZP13kOAuHzvBb40Y1Y1gJv1Jpar0gQZ53TGnzvdlApRg-Gjr-O3QSA5CSVrdHfmqQJlFoIwl8wL92jgjMwcZ9Q" />

        <IonText className="company-name">UT-Feast</IonText>

        <IonCard className="company-card">
          <IonCardHeader>
            <IonCardTitle>Sobre Nosotros</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            UT-Feast es una plataforma dedicada a apoyar a la comunidad de vendedores universitarios que ofrecen comida y snacks a la comunidad. Nuestra aplicación permite a los estudiantes y personal universitario comprar alimentos de manera rápida y conveniente, adaptándose a las necesidades de cada cliente.
          </IonCardContent>
        </IonCard>

        <IonCard className="company-card">
          <IonCardHeader>
            <IonCardTitle>Misión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Facilitar el acceso a alimentos y snacks de calidad en el entorno universitario, apoyando a los emprendedores locales y promoviendo una economía solidaria en la comunidad universitaria.
          </IonCardContent>
        </IonCard>

        <IonCard className="company-card">
          <IonCardHeader>
            <IonCardTitle>Visión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Ser la plataforma líder para la compra de alimentos y snacks en el ámbito universitario, reconocida por nuestra contribución al bienestar de la comunidad estudiantil y al impulso de los vendedores locales.
          </IonCardContent>
        </IonCard>

        <IonCard className="company-card">
          <IonCardHeader>
            <IonCardTitle>Valores</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li>Solidaridad</li>
              <li>Innovación</li>
              <li>Calidad</li>
              <li>Responsabilidad</li>
              <li>Compromiso con la Comunidad</li>
            </ul>
          </IonCardContent>
        </IonCard>

        <IonCard className="company-card contact-card">
          <IonCardHeader>
            <IonCardTitle>Contacto</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="contact-info">
              <IonIcon icon={call} className="contact-icon" />
              <IonText>+123 456 7890</IonText>
            </div>
            <div className="contact-info">
              <IonIcon icon={mail} className="contact-icon" />
              <IonText>info@utfeast.com</IonText>
            </div>
            <div className="contact-info">
              <IonIcon icon={location} className="contact-icon" />
              <IonText>Universidad Tecnológica, Campus Principal</IonText>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CompanyInfo;
