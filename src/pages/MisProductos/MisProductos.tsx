import { IonContent, IonGrid, IonPage, IonRow, IonCol, IonText, IonImg, IonToolbar, IonIcon, IonRouterLink } from '@ionic/react';
import './MisProductos.css';
import BackButton from '../../components/backBtn/BackButton';
import { pencil } from 'ionicons/icons';

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
        <IonText className="results-textMisProductos">{products.length} Productos</IonText>
        <IonGrid>
          <IonRow>
            {products.map((product) => (
              <IonCol size="6" key={product.id} className="product-card-colMisProductos">
                  <div className="product-cardMisProductos">
                    <IonRouterLink routerLink="/EditarProducto" style={{ position: 'absolute', top: '8px', right: '8px' }}>
                      <IonIcon aria-hidden="true" icon={pencil} className="icon-pencilMisProductos" />
                    </IonRouterLink>

                    <IonImg src={product.img} className="product-imageMisProductos" />
                    
                    <IonText className="product-nameMisProductos">{product.name}</IonText>
                    <IonText className="product-priceMisProductos">{product.price}</IonText>
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
