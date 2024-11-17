import React, { useState, useEffect } from 'react';
import { IonItem, IonList, IonSearchbar, IonContent, IonPage, IonText, IonSpinner, IonRouterLink } from '@ionic/react';
import axios from 'axios';
import { IProduct } from '../../interfaces/IProduct';

const Tab2: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [noResults, setNoResults] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5100/utfeast/products');
      setProducts(response.data.data);
      setFilteredProducts(response.data.data);
    };

    fetchProducts();
  }, []);

  const handleInput = async (ev: CustomEvent) => {
    const query = (ev.target as HTMLInputElement).value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredProducts(products);
      setNoResults(false);
      return;
    }

    setIsLoading(true);
    setNoResults(false);

    try {
      const response = await axios.get('http://localhost:5100/utfeast/products/search', {
        params: { query },
      });

      setFilteredProducts(response.data.data);
      setIsLoading(false);

      if (response.data.data.length === 0) {
        setNoResults(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <IonPage>
      <IonContent>
        <IonSearchbar
          value={searchQuery}
          onIonInput={handleInput}
          debounce={500}
          placeholder="Buscar productos"
        />

        {isLoading ? (
          <IonSpinner name="dots" />
        ) : (
          <>
            {noResults && <p style={{ color: 'red', padding: '10px' }}>No se encontraron productos.</p>}

            <IonList>
              {filteredProducts.map((product) => (
                <IonRouterLink key={product._id} routerLink={`/ProductInfo/${product._id}`}>
                  <IonItem key={product._id}>
                    <IonText>{product.name}</IonText>
                  </IonItem>
                </IonRouterLink>
              ))}
            </IonList>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
