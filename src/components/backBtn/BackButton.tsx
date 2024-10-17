import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonButton, IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';

const BackButton: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <IonButton className='backButton' onClick={handleBack} shape='round'>
      <IonIcon icon={arrowBackOutline}/>
    </IonButton>
  );
};

export default BackButton;
