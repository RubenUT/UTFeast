import { IonContent, IonGrid, IonPage, IonRow, IonCol, IonText, IonImg, IonToolbar, IonIcon, IonRouterLink } from '@ionic/react';
import './MisProductos.css';
import BackButton from '../../components/BackButton/BackButton';
import { pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IProduct } from '../../interfaces/IProduct';
import axios from 'axios';

const MisProductos: React.FC = () => {

  const { _id } = useParams<{ _id: string }>();
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get(`http://localhost:5100/utfeast/users/${_id}/products`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data.data);
      } catch (e) {
        console.error("Error al cargar los productos:", e);
      }
    };

    fetchProducts();
  }, [_id]);

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
              <IonCol size="6" key={product._id} className="product-card-colMisProductos">
                <div className="product-cardMisProductos">
                  <IonRouterLink routerLink={`/EditarProducto/${product._id}`} style={{ position: 'absolute', top: '8px', right: '8px' }}>
                    <IonIcon aria-hidden="true" icon={pencil} className="icon-pencilMisProductos" />
                  </IonRouterLink>

                  <IonImg src={product.image || 'https://via.placeholder.com/150'} className="product-imageMisProductos" />

                  <IonText className="product-nameMisProductos">{product.name}</IonText>
                  <IonText className="product-priceMisProductos">${product.price}</IonText>
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
