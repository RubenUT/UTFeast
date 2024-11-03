import { IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonImg, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonToolbar } from "@ionic/react";
import './ProductoCategoria.css';
import BackButton from "../../components/BackButton/BackButton";
import { searchCircle } from "ionicons/icons";

const ProductoCategoria: React.FC = () => {

    const Categorias = [
        {
            id: 1,
            img: 'https://www.soriana.com/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw20a9a665/images/product/0256850000008_A.jpg',
            nombre: 'Torta de jamon',
        },
        {
            id: 2,
            img: 'https://circulokmx.vtexassets.com/arquivos/ids/161308-800-auto?v=638138814732530000&width=800&height=auto&aspect=true',
            nombre: 'Torta de salchicha',
        },
        {
            id: 3,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgU3q3dgDICaaK4amKUub9Xp1l405kjPB-Q&s',
            nombre: 'Torta ahogadas',
        },
        {
            id: 4,
            img: 'https://www.thecandidcooks.com/wp-content/uploads/2023/05/carnitas-torta-feature.jpg',
            nombre: 'Torta de carnitas',
        },
        {
            id: 5,
            img: 'https://editorialtelevisa.brightspotcdn.com/dims4/default/9dfc221/2147483647/strip/true/crop/419x419+0+29/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2018%2F03%2FTortas-de-milanesa.jpg',
            nombre: 'Torta de milanesa',
        },
        {
            id: 6,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_YXjUBujpby4kDZOCI1v9a46IkpwTUgwIvw&s',
            nombre: 'Torta de pastor',
        },
        {
            id: 7,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVt_y_HQ-O6j8ZRtf59KFKdtsjLMTilxfLA&s',
            nombre: 'Torta cubana',
        },
        {
            id: 8,
            img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmNECnyCZcpFzFBVQJWvci4qsFEy7ljgJ5GIu3iEXN0mpWKO7TUaFt4d3awdUZCkERFDmaKldUlyaJfhzMon2EPBs9Sfdmn9K-Oo7wgC1JMZeiTsZSo1UlB6T-UukhRXCG1KrnQFgVgPkl/w1200-h630-p-k-no-nu/torta+de+pierna+03.jpg',
            nombre: 'Torta de pierna',
        },

    ];


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
                            <IonRouterLink routerLink='/ProductoFavorito' className="ViewMore-link">
                                Ver más
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>

                    <IonRow className="procat__row--mid">
                        <IonCol className="procat__col--mid">
                            <IonRouterLink routerLink="/Producto-Information">
                                <div className="Cardscategorias">
                                    {Categorias.map(categoria => (
                                        <IonCard key={categoria.id} className="Categorias">
                                            <IonImg src={categoria.img} className="centered-image" />
                                            <IonCardHeader>
                                                <IonCardSubtitle>{categoria.nombre}</IonCardSubtitle>
                                            </IonCardHeader>
                                        </IonCard>
                                    ))}
                                </div>
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>

                    <IonRow className="procat__row--header">
                        <IonCol className="procat__header--col">
                            <IonText className="procat__header--title">Comida</IonText>
                            <IonRouterLink routerLink='/MasProductos' className="ViewMore-link">
                                Ver más
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>

                    <IonRow className="procat__row--bottom">
                        <IonCol className="procat__col--bottom">
                            <div className="Cardscategorias">
                                {Categorias.map(categoria => (
                                    <IonCard key={categoria.id} className="Categorias">
                                        <IonImg src={categoria.img} className="centered-image" />
                                        <IonCardHeader>
                                            <IonCardSubtitle>{categoria.nombre}</IonCardSubtitle>
                                        </IonCardHeader>
                                    </IonCard>
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
