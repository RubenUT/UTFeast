import { IonContent, IonGrid, IonPage, IonRow, IonCol, IonText, IonImg, IonToolbar, IonRouterLink } from '@ionic/react';
import './ProductosVendedor.css';
import BackButton from '../../components/BackButton/BackButton';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { IProduct } from '../../interfaces/IProduct';
import axios from 'axios';

const ProductosVendedor: React.FC = () => {
  const { _id } = useParams<{ _id: string }>();
  const [sellerProducts, setSellerProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5100/utfeast/users/${_id}/products`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setSellerProducts(response.data.data);
      } catch (e) {
        console.log('Error al cargar los productos del vendedor:', e);
      }
    };
    fetchSellerProducts();
  }, [_id]);

  return (
    <IonPage className="productos-vendedor">
      <IonToolbar>
        <BackButton />
      </IonToolbar>
      <IonContent className="ion-padding">
        {sellerProducts.length === 0 ? (
          <div className="no-products-container">
            <IonImg 
              src="/src/assets/images/no-products.png" 
              alt="No hay productos disponibles" 
              className="no-products-image" 
            />
            <IonText className="no-products-title">No hay productos disponibles</IonText>
            <IonText className="no-products-message">
              ¡Vaya!, parece que este vendedor no tiene productos disponibles por el momento.<br/>
              Intenta volviendo más tarde.
            </IonText>
          </div>
        ) : (
          <>
            <IonText className="results-text"> {sellerProducts.length} Productos </IonText>
            <IonGrid>
              <IonRow>
                {sellerProducts.map((sellerProduct) => (
                  <IonCol size="6" key={sellerProduct._id} className="product-card-colMisProductos">
                    <IonRouterLink routerLink={`/ProductInfo/${sellerProduct._id}`}>
                      <div className="product-cardMisProductos">
                        <IonImg src={sellerProduct.image || 'https://via.placeholder.com/150'} className="product-imageMisProductos" />
                        <IonText className="product-nameMisProductos">{sellerProduct.name}</IonText>
                        <IonText className="product-priceMisProductos">${sellerProduct.price}</IonText>
                      </div>
                    </IonRouterLink>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ProductosVendedor;
