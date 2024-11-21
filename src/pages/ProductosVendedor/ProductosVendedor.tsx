import { IonContent, IonGrid, IonPage, IonRow, IonCol, IonText, IonImg, IonToolbar, IonRouterLink } from '@ionic/react';
import './ProductosVendedor.css';
import BackButton from '../../components/BackButton/BackButton';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { IProduct } from '../../interfaces/IProduct';
import axios from 'axios';

const productsvendedor = [
  { id: 1, name: 'Veggie tomato mix', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 2, name: 'Egg and cucumber...', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 3, name: 'Fried chicken m.', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 4, name: 'Moi-moi and ekpa.', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 5, name: 'Rice and stew', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
  { id: 6, name: 'Fish pepper soup', price: 'N1,900', img: 'https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg' },
];


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
        console.log('Error al cargar los productos del vendedor:', e)
      }
    };
    fetchSellerProducts();
  }, [_id]);

  return (
    <IonPage>
      <IonToolbar>
        <BackButton />
      </IonToolbar>
      <IonContent className="ion-padding">
        <IonText className="results-text"> {sellerProducts.length} Productos </IonText>

        <IonGrid>
          <IonRow>
            {sellerProducts.map((sellerProduct) => (
              <IonCol size="6" key={sellerProduct._id} className="product-card-col">
                <IonRouterLink routerLink={`/ProductInfo/${sellerProduct._id}`}>
                  <div className="product-card">
                    <IonImg src={sellerProduct.image || 'https://via.placeholder.com/150'} className="product-image" />
                    <IonText className="product-name">{sellerProduct.name}</IonText>
                    <IonText className="product-price">${sellerProduct.price}</IonText>
                  </div>
                </IonRouterLink>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ProductosVendedor;
