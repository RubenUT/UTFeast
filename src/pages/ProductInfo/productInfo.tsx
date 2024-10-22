import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonBackButton, IonContent, IonImg, IonText, IonIcon } from '@ionic/react';
import { logoWhatsapp } from 'ionicons/icons';
import './productInfo.css';
import BackButton from '../../components/backBtn/BackButton';

const ProductInfo: React.FC = () => {
    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <BackButton />
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className="product-image-container">
                    <IonImg src="path-to-image.jpg" alt="Product" className="product-image" />
                </div>
            </IonContent>

            <IonContent>
                <div className="product-info-container">
                    <IonText>
                        <h1 className="product-name">Chilaquiles</h1>
                        <p className="product-price">$2000</p>
                        <p className="product-seller">Vendido por: Ruben Estrada</p>
                    </IonText>
                    <hr />
                    <IonText>
                        <p className="product-description">Descripción del Producto</p>
                    </IonText>
                </div>
            </IonContent>
            <hr />
            <IonContent>
                <IonButton
                    expand="block"
                    color="light"
                    className="whatsapp-button"
                    onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                    <IonIcon icon={logoWhatsapp} slot="start" />
                    Contactar por WhatsApp
                </IonButton>

            </IonContent>
        </IonPage>
    );
};

export default ProductInfo;
