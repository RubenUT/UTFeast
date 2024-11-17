import { IonContent, IonGrid, IonImg, IonPage, IonRow, IonText } from "@ionic/react";
import BackButton from "../../components/BackButton/BackButton";
import './CreatedProduct.css';
import { useParams } from "react-router-dom";
import { IProduct } from "../../interfaces/IProduct";
import { useEffect, useState } from "react";
import axios from "axios";


const CreatedProduct: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await axios.get(`http://localhost:5100/utfeast/products/${productId}`);
                console.log(response.data.data);
                setProduct(response.data.data);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        }
        
        fetchProduct();
    }, [productId]);

    if (!product) {
        return <IonText>Loading...</IonText>;
    }

    return (
        <IonPage>
            <IonContent>
                <IonGrid className="product-info">
                    <BackButton />
                    <IonRow className="product-info__top--row">
                        <IonImg
                            className="product-info__img"
                            src={product.image}
                            alt="Imagen de producto"
                        />
                    </IonRow>
                    <IonRow className="product-info__details--row">
                        <IonText className="product-details--name">{product.name}</IonText>
                        <IonText className="product-details--price">${product.price}</IonText>
                        <IonText className="product-details--description">{product.description}</IonText>
                        <IonText className="product-details--seller"><strong>Vendido por: </strong>{product.sellerName}</IonText>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default CreatedProduct;