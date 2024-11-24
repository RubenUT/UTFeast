import { IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonImg, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText } from "@ionic/react";
import './ProductoCategoria.css';
import BackButton from "../../components/BackButton/BackButton";
import { searchCircle } from "ionicons/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const ProductoCategoria: React.FC = () => {

    const { categoryId } = useParams<{ categoryId: string }>();
    const [products, setProducts] = useState<{ _id: string, name: string, image: string }[]>([]);


    useEffect(() => {
        console.log('categoryId:', categoryId);
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:5100/utfeast/categories/${categoryId}/products`);
                setProducts(response.data.products);
            } catch (e) {

                console.log('Error al cargar productos:', e)
            }
        };
        fetchProducts();
    }, [categoryId]);

    return (
        <IonPage>
            <IonContent>
                <BackButton />
                <IonGrid className="procat" style={{ marginTop: 70 }}>

                    <IonRow className="procat__row--top">
                        <IonCol className="procat__top--col">
                            <IonRouterLink routerLink="/tab2">
                                <IonSearchbar
                                    placeholder="Buscar tu comida"
                                    mode="ios"
                                    showCancelButton="never"
                                />
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>

                    <IonRow className="procat__row--header">
                        <IonCol className="procat__header--col">
                            <IonText className="procat__header--title">Productos favoritos</IonText>
                            <IonRouterLink routerLink={`/ProductoFavorito/${categoryId}`} className="ViewMore-link">
                                Ver más
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>

                    <IonRow className="procat__row--mid">
                        <IonCol className="procat__col--mid">
                            <div className="Cardscategorias">
                                {products.map(product => (
                                    <IonRouterLink key={product._id} routerLink={`/ProductInfo/${product._id}`} className="Categorias">
                                        <IonCard style={{boxShadow:'none'}}>
                                            <IonImg src={product.image || 'https://via.placeholder.com/150'} onError={(e) => (e.currentTarget.src = "https://gebelesebeti.ge/front/asset/img/default-product.png")} className="centered-image" />
                                            <IonCardHeader>
                                                <IonCardSubtitle>{product.name}</IonCardSubtitle>
                                            </IonCardHeader>
                                        </IonCard>
                                    </IonRouterLink>
                                ))}
                            </div>
                        </IonCol>
                    </IonRow>

                    <IonRow className="procat__row--header">
                        <IonCol className="procat__header--col">
                            <IonText className="procat__header--title">Comida</IonText>
                            <IonRouterLink routerLink={`/MasProductos/${categoryId}`}  className="ViewMore-link">
                                Ver más
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>

                    <IonRow className="procat__row--bottom">
                        <IonCol className="procat__col--bottom">
                        <div className="Cardscategorias">
                                {products.map(product => (
                                    <IonRouterLink key={product._id} routerLink={`/ProductInfo/${product._id}`} className="Categorias">
                                        <IonCard style={{boxShadow:'none'}}>
                                            <IonImg src={product.image || 'https://via.placeholder.com/150'} onError={(e) => (e.currentTarget.src = "https://gebelesebeti.ge/front/asset/img/default-product.png")} className="centered-image" />
                                            <IonCardHeader>
                                                <IonCardSubtitle>{product.name}</IonCardSubtitle>
                                            </IonCardHeader>
                                        </IonCard>
                                    </IonRouterLink>
                                ))}
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <div style={{ height: '20px' }}></div>
            </IonContent>
        </IonPage>
    );
}

export default ProductoCategoria;
