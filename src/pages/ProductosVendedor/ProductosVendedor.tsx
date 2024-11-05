import { IonContent, IonGrid, IonPage, IonRow, IonCol, IonText, IonImg, IonToolbar, IonRouterLink } from '@ionic/react';
import './ProductosVendedor.css';
import BackButton from '../../components/BackButton/BackButton';

const productsvendedor = [
  { id: 1, name: 'Veggie tomato mix', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 2, name: 'Egg and cucumber...', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 3, name: 'Fried chicken m.', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 4, name: 'Moi-moi and ekpa.', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 5, name: 'Rice and stew', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 6, name: 'Fish pepper soup', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
];

const ProductosVendedor: React.FC = () => {
  return (
    <IonPage>
        <IonToolbar>
        <BackButton />
        </IonToolbar>
      <IonContent className="ion-padding">
        <IonText className="results-text"> {productsvendedor.length} Productos </IonText>
        <IonRouterLink routerLink='/Producto-Information'>
        <IonGrid>
          <IonRow>
            {productsvendedor.map((productsvendedor) => (
              <IonCol size="6" key={productsvendedor.id} className="product-card-col">
                <div className="product-card">
                  <IonImg src={productsvendedor.img} className="product-image" />
                  <IonText className="product-name">{productsvendedor.name}</IonText>
                  <IonText className="product-price">{productsvendedor.price}</IonText>
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default ProductosVendedor;
