import { IonContent, IonPage, IonCard, IonCardContent, IonImg, IonText, IonAvatar, IonToolbar, IonSearchbar, IonRouterLink, useIonRouter } from '@ionic/react';
import './MasProductos.css';
import BackButton from '../../components/BackButton/BackButton';
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import IUser from '../../interfaces/IUser';

interface Product {
  _id: string;
  name: string;
  image: string;
  userId: string;
}

const MasProductos = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<Record<string, IUser>>({});
  const [searchText, setSearchText] = useState('');
  const router = useIonRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5100/utfeast/categories/${categoryId}/products`);
        setProducts(response.data.products);
      } catch (e) {
        console.log('Error al cargar productos:', e);
      }
    };
    fetchProducts();
  }, [categoryId]);

  useEffect(() => {
    const fetchUsersForProducts = async () => {
      const token = localStorage.getItem("authToken");

      try {
        const userPromises = products.map(async (product) => {
          if (!users[product.userId]) {
            const response = await axios.get(`http://localhost:5100/utfeast/users/${product.userId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            return { userId: product.userId, data: response.data.data };
          }
          return null;
        });

        const userResults = await Promise.all(userPromises);

        const newUsers = userResults.reduce((acc, result) => {
          if (result) {
            acc[result.userId] = result.data;
          }
          return acc;
        }, {} as Record<string, IUser>);

        setUsers((prevUsers) => ({ ...prevUsers, ...newUsers }));
      } catch (e) {
        console.log('Error al cargar usuarios:', e);
      }
    };

    if (products.length > 0) {
      fetchUsersForProducts();
    }
  }, [products]);

  const filteredProducts = searchText.trim()
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : products;

  return (
    <IonPage>
      <IonToolbar>
        <BackButton />
      </IonToolbar>
      <IonContent className="ion-padding">
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value || '')}
          placeholder="Buscar tu comida"
          mode="ios"
          showCancelButton="focus"
        />
        <h2 className="favorites-title">Comida</h2>
        <div className="favorites-grid">
          {filteredProducts.map(product => (
            <IonRouterLink key={product._id} routerLink={`/ProductInfo/${product._id}`}>
              <IonCard className="favorite-card">
                <div className="card-image-container">
                  <IonImg src={product.image} className="card-image" />
                </div>
                <IonCardContent>
                  <IonText className="favorite-title">{product.name}</IonText>
                  <div className="user-info">
                    {users[product.userId] ? (
                      <>
                        <IonAvatar className="user-avatar">
                          <img src={users[product.userId].image} alt="User" />
                        </IonAvatar>
                        <IonText className="user-name">{users[product.userId].name}</IonText>
                      </>
                    ) : (
                      <IonText className="user-loading">Cargando usuario...</IonText>
                    )}
                  </div>
                </IonCardContent>
              </IonCard>
            </IonRouterLink>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MasProductos;
