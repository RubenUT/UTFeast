import { IonContent, IonGrid, IonPage, IonRow, IonCol, IonText, IonImg, IonToolbar } from '@ionic/react';
import './MisProductos.css';
import BackButton from '../../components/backBtn/BackButton';

const products = [
  { id: 1, name: 'Veggie tomato mix', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 2, name: 'Egg and cucumber...', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 3, name: 'Fried chicken m.', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 4, name: 'Moi-moi and ekpa.', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 5, name: 'Rice and stew', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 6, name: 'Fish pepper soup', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
];

const MisProductos: React.FC = () => {
  return (
    <IonPage>
        <IonToolbar>
        <BackButton />
        </IonToolbar>
      <IonContent className="ion-padding">
        <IonText className="results-text"> {products.length} Productos </IonText>
        <IonGrid>
          <IonRow>
            {products.map((product) => (
              <IonCol size="6" key={product.id} className="product-card-col">
                <div className="product-card">
                  <IonImg src={product.img} className="product-image" />
                  <IonText className="product-name">{product.name}</IonText>
                  <IonText className="product-price">{product.price}</IonText>
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MisProductos;
