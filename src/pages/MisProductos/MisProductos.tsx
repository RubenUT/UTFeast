import { IonContent, IonGrid, IonPage, IonRow, IonCol, IonText, IonImg, IonToolbar, IonIcon, IonRouterLink, IonAlert, IonButton, IonModal } from '@ionic/react';
import './MisProductos.css';
import BackButton from '../../components/BackButton/BackButton';
import { pencil, trash } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IProduct } from '../../interfaces/IProduct';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MisProductos: React.FC = () => {
  const { _id } = useParams<{ _id: string }>();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [productToDelete, setProductToDelete] = useState<IProduct | null>(null);
  const history = useHistory();

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

  useEffect(() => {
    fetchProducts();
  }, [_id]);

  useEffect(() => {
    const unlisten = history.listen((location) => {
      if (location.pathname === `/MisProductos/${_id}`) {
        fetchProducts();
      }
    });
    return () => unlisten();
  }, [history, _id]);

  const handleDeleteProduct = async (productId: string) => {
    const token = localStorage.getItem("authToken");
    try {
      await axios.delete(`http://localhost:5100/utfeast/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(products.filter(product => product._id !== productId));
    } catch (e) {
      console.error("Error al eliminar el producto:", e);
    }
  };

  const confirmDeleteProduct = (product: IProduct) => {
    setProductToDelete(product);
    setShowAlert(true);
  };

  return (
    <IonPage>
      <IonToolbar>
        <BackButton />
      </IonToolbar>
      <IonContent className="ion-padding">
        <IonText className="results-textMisProductos">{products.length} Productos</IonText>
        <IonGrid>
          <IonRow>
            {products.length === 0 ? (
              <div className="no-products-container">
                <IonImg 
                  src="/src/assets/images/no-products.png" 
                  alt="No hay productos disponibles" 
                  className="no-products-image" 
                />
                <IonText className="no-products-title">No hay productos disponibles</IonText>
                <IonText className="no-products-message">
                  ¡Vaya!, parece que aún no tiene productos disponibles por el momento.<br/>
                  Intenta agregar un producto.
                </IonText>
              </div>
            ) : (
              products.map((product) => (
                <IonCol size="6" key={product._id} className="product-card-colMisProductos">
                  <div className="product-cardMisProductos">
                    <IonRouterLink routerLink={`/EditarProducto/${product._id}`} style={{ position: 'absolute', top: '8px', right: '8px' }}>
                      <IonIcon aria-hidden="true" icon={pencil} className="icon-pencilMisProductos" />
                    </IonRouterLink>
                    <IonIcon
                      aria-hidden="true"
                      icon={trash}
                      className="icon-trashMisProductos"
                      style={{ position: 'absolute', top: '8px', left: '8px' }}
                      onClick={() => confirmDeleteProduct(product)}
                    />
                    <IonImg src={product.image || 'https://via.placeholder.com/150'} className="product-imageMisProductos" />
                    <IonText className="product-nameMisProductos">{product.name}</IonText>
                    <IonText className="product-priceMisProductos">${product.price}</IonText>
                  </div>
                </IonCol>
              ))
            )}
          </IonRow>
        </IonGrid>

        <IonModal isOpen={showAlert} className="small-modal" onDidDismiss={() => setShowAlert(false)}>
          <div className="modal-content">
            <IonText className="modal-header">Eliminar Producto</IonText>
            <IonText className="modal-message">
              ¿Estás seguro de que deseas eliminar <strong>{productToDelete?.name}</strong>? Esta acción no se puede deshacer.
            </IonText>
            <div className="modal-buttons">
              <IonButton onClick={() => setShowAlert(false)} color="medium">
                Cancelar
              </IonButton>
              <IonButton
                onClick={() => {
                  if (productToDelete) {
                    handleDeleteProduct(productToDelete._id);
                  }
                  setShowAlert(false);
                }}
                color="danger"
              >
                Eliminar
              </IonButton>
            </div>
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default MisProductos;