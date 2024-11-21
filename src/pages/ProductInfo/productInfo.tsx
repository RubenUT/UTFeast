import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonText, IonToolbar } from '@ionic/react';
import BackButton from '../../components/BackButton/BackButton';
import './productInfo.css';
import { logoWhatsapp } from 'ionicons/icons';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { IProduct } from '../../interfaces/IProduct';
import axios from 'axios';

const ProductInfo: React.FC = () => {
    const { _id } = useParams<{ _id: string }>();
    const [ product, setProduct ] = useState<IProduct | null>(null);
    
    useEffect(()=>{
        const fetchProduct = async () => {
            try{
                const response = await axios.get(`http://localhost:5100/utfeast/products/${_id}`);
                setProduct(response.data.data);
            } catch(e){
                console.log('Error al cargar producto:', e)
            }
        };
        fetchProduct();
    }, [_id]);
    return (
        <IonPage>
            <IonContent>
                <IonGrid className="product-info">
                    <BackButton />
                    <IonRow className="product-info__row--top">
                        <IonCol className="product-info__col--top">
                            <IonImg
                                className="product-info__img"
                                src={product?.image || 'https://via.placeholder.com/150'}
                                alt="Imagen de producto"
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow className="product-info__row--details">
                        <IonCol className="product-info__col--details">
                            <IonText className="product-info__name">
                                <h2>{product?.name}</h2>
                            </IonText>
                            <IonText className="product-info__price">${product?.price}</IonText>
                            <br />
                            <IonText className="product-info__description">
                                {product?.description}
                            </IonText>
                            <br />
                            <IonText className="product-info__seller">
                                <strong>Vendedor:</strong> {product?.sellerName}
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow className="product-info__row--bottom">
                        <IonCol className="product-info__col--bottom">
                            <IonButton expand="block" className="product-info__button" href={`https://wa.me/${product?.sellerPhone}`}>
                                <IonIcon icon={logoWhatsapp} slot="start" />
                                Enviar mensaje
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <div style={{ height: '50px' }}></div>
            </IonContent>
        </IonPage>
    );
};

export default ProductInfo;
