import { IonContent, IonIcon, IonText, IonButton } from '@ionic/react';
import { wifiOutline } from 'ionicons/icons';
import './NoInternetConnection.css';

const NoInternetConnection: React.FC = () => {
  const handleRetry = () => {
    console.log("Intentando reconectar...");
  };

  return (
    <IonContent className="no-internet-connection">
      <div className="centered-content">
        <IonIcon icon={wifiOutline} className="icon-large" />
        <IonText className="title">No internet Connection</IonText>
        <IonText className="subtitle">
          Your internet connection is currently not available, please check or try again.
        </IonText>
        <IonButton color="danger" onClick={handleRetry}>Try again</IonButton>
      </div>
    </IonContent>
  );
};

export default NoInternetConnection;
