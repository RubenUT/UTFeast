import { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardContent, IonImg, IonText, IonAvatar, IonToolbar, IonSearchbar, IonRouterLink } from '@ionic/react';
import './MasProductos.css';
import BackButton from '../../components/BackButton/BackButton';

const masproduct = [
  {
    id: 1,
    name: 'Sunny Egg & Toast Avocado',
    img: 'https://manageat.com/wp-content/uploads/2022/05/healthy-leaves-mix-salad-2022-03-03-12-52-14-utc.jpg',
    user: 'Alice Fala',
    userAvatar: 'https://www.famousbirthdays.com/headshots/jh-de-la-cruz-1.jpg',
  },
  {
    id: 2,
    name: 'Bowl of noodle with beef',
    img: 'https://manageat.com/wp-content/uploads/2022/05/healthy-leaves-mix-salad-2022-03-03-12-52-14-utc.jpg',
    user: 'James Spader',
    userAvatar: 'https://www.famousbirthdays.com/headshots/jh-de-la-cruz-1.jpg',
  },
  {
    id: 3,
    name: 'Easy homemade beef burger',
    img: 'https://manageat.com/wp-content/uploads/2022/05/healthy-leaves-mix-salad-2022-03-03-12-52-14-utc.jpg',
    user: 'Ruben Estrada',
    userAvatar: 'https://www.famousbirthdays.com/headshots/jh-de-la-cruz-1.jpg',
  },
  {
    id: 4,
    name: 'Half boiled egg sandwich',
    img: 'https://manageat.com/wp-content/uploads/2022/05/healthy-leaves-mix-salad-2022-03-03-12-52-14-utc.jpg',
    user: 'Natalia Luca',
    userAvatar: 'https://www.famousbirthdays.com/headshots/jh-de-la-cruz-1.jpg',
  },
];

const MasProductos = () => {
  const [searchText, setSearchText] = useState('');

  const filteredMoreProduct = masproduct.filter((masproduct) =>
    masproduct.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <IonPage>
      <IonToolbar>
        <BackButton />
      </IonToolbar> 
      <IonContent className="ion-padding">
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          placeholder="Buscar tu comida"
          mode="ios"
          showCancelButton="always"
        />
        <h2 className="favorites-title">Comida</h2>
        <IonRouterLink routerLink='/Producto-Information'>
        <div className="favorites-grid">
          {filteredMoreProduct.map((masproduct) => (
            <IonCard key={masproduct.id} className="favorite-card">
              <div className="card-image-container">
                <IonImg src={masproduct.img} className="card-image" />
              </div>
              <IonCardContent>
                <IonText className="favorite-title">{masproduct.name}</IonText>
                <div className="user-info">
                  <IonAvatar className="user-avatar">
                    <img src={masproduct.userAvatar} alt={masproduct.user} />
                  </IonAvatar>
                  <IonText className="user-name">{masproduct.user}</IonText>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default MasProductos;
