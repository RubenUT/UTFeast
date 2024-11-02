import { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardContent, IonImg, IonText, IonAvatar, IonToolbar, IonSearchbar, IonRouterLink } from '@ionic/react';
import './ProductoFav.css';
import BackButton from '../../components/BackButton/BackButton';

const favoriteProducts = [
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

const ProductoFavorito = () => {
    const [searchText, setSearchText] = useState('');

    const filteredFavoriteProducts = favoriteProducts.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
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
                <h2 className="favorites-title">Productos Favoritos</h2>
                <IonRouterLink routerLink='/Producto-Information'>
                <div className="favorites-grid">
                    {filteredFavoriteProducts.map((product) => (
                        <IonCard key={product.id} className="favorite-card">
                            <div className="card-image-container">
                                <IonImg src={product.img} className="card-image" />
                            </div>
                            <IonCardContent>
                                <IonText className="favorite-title">{product.name}</IonText>
                                <div className="user-info">
                                    <IonAvatar className="user-avatar">
                                        <img src={product.userAvatar} alt={product.user} />
                                    </IonAvatar>
                                    <IonText className="user-name">{product.user}</IonText>
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

export default ProductoFavorito;