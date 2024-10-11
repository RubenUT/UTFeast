import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
return (
  <IonPage>
  <IonCard>
    <IonCardHeader>
      <IonCardTitle>Card Title</IonCardTitle>
      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
  </IonCard>
  </IonPage>
);
};

export default Tab1;
