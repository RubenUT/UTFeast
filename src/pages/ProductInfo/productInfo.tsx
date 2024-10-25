import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonRow, IonText } from '@ionic/react';
import BackButton from '../../components/backBtn/BackButton';
import './productInfo.css';
import { logoWhatsapp } from 'ionicons/icons';

const ProductInfo: React.FC = () => {
    let vendedor = 'Ruben Estgar';

    return (
        <IonPage>
            <IonContent>
                <IonGrid className='product-info'>
                    <BackButton />
                    <IonRow className='product-info__row--top'>
                        <IonCol className='product-info__col--top'>
                            <IonImg
                                className='product-info__img'
                                src='https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_1280.jpg'
                                alt='Imagen de producto'
                            ></IonImg>
                            <IonText className='product-info__name'>
                                <h2>Chilaquiles</h2>
                            </IonText>
                            <IonText className='product-info__price'>
                                $50
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow className='product-info__row--mid'>
                        <IonCol className='product-info__col--mid'>
                            <IonText className='product-info__description'>¡Deléitate con nuestros chilaquiles! Crujientes totopos bañados en una salsa roja o verde, acompañados de crema fresca, queso rallado y cebolla morada. Perfectos para un desayuno reconfortante o un antojo irresistible. ¡Ven y disfruta de este clásico mexicano que combina sabor y tradición en cada bocado!</IonText><br/>
                            <br/>
                            <IonText className='product-info__seller'>Vendedor: {vendedor}</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow className='product-info__row--bottom'>
                        <IonCol className='product-info__col--bottom'>
                            <IonButton className='product-info__button'>
                                <IonIcon icon={logoWhatsapp} slot='start'>
                                </IonIcon>
                                <IonText>Enviar mensaje</IonText>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ProductInfo;
