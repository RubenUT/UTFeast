import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonButton, IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import './BackButton.css';

const BackButton: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <IonButton className="backButton" onClick={handleBack} shape="round" color="light">
      <IonIcon icon={arrowBackOutline} slot="icon-only" />
    </IonButton>
  );
};

export default BackButton;