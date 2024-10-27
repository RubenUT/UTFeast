import { IonContent, IonIcon, IonText, IonButton } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import './ItemNotFound.css';

const ItemNotFound: React.FC = () => {
  return (
    <IonContent className="item-not-found">
      <div className="centered-content">
        <IonIcon icon={searchOutline} className="icon-large" />
        <IonText className="title">Item not found</IonText>
        <IonText className="subtitle">Try searching the item with a different keyword.</IonText>
      </div>
    </IonContent>
  );
};

export default ItemNotFound;
