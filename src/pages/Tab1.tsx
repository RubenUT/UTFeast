import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonicSlides, IonGrid, IonRow, IonCol, IonImg, IonText, IonAvatar, IonItem, IonRouterLink } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import './Tab1.css';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';
import NoInternetConnection from '../components/NoInternet/NoInternetConection';
import axios from 'axios';
import IUser from '../interfaces/IUser';

const Tab1: React.FC = () => {
  const [noInternet, setNoInternet] = useState(false);

  const slides = [
    { id: 1, url: 'https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg' },
    { id: 2, url: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Platos-de-comida-que-pides-a-domicilio-y-puedes-hacer-en-casa.jpg' },
    { id: 3, url: 'https://editorialtelevisa.brightspotcdn.com/dims4/default/b91caa2/2147483647/strip/false/crop/1200x672+0+0/resize/1200x672!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F6b%2F59%2Fae19ff0c42029062b2f3d03d3b1f%2Fmejores-recetas-de-comida-mexicana.jpeg' },
    { id: 4, url: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/52bf/live/5bc2da50-f03a-11ee-93c8-19dcc8295613.jpg.webp' },
    { id: 5, url: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg' },
  ];

  const [categories, setCategories] = useState<{_id: string; name:string; image:string}[]>([]);
  const [sellers, setSellers] = useState<IUser[]>([]);

  useEffect(()=>{
    const fetchCategories = async () => {
      try{
        const response = await axios.get("http://localhost:5100/utfeast/categories");
        setCategories(response.data.data);
      }catch(e){
        console.log('Error al cargar categorias:', e)
      }
    };
    fetchCategories();
  }, []);

  useEffect( () => {
    const fetchSellers = async () => {
      try{
        const response = await axios.get('http://localhost:5100/utfeast/users');
        setSellers(response.data.data);
      }catch(e){
        console.log('Error al cargar usuarios:', e)
      }
    };
    fetchSellers();
  }, []);
  
  if (noInternet) {
    return <NoInternetConnection />;
  }

  return (
    <IonPage>
      
      <IonContent>
        <IonGrid className="menu">
          <IonRow className="menu__row--top">
            <IonCol className="menu__col--top">
              <IonImg className="menu__logo--img" src="src/assets/images/utfeast-logo.svg" alt="UTFeast Logo" />
              <Swiper
                className="menu__swiper"
                modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides, Navigation]}
                autoplay={{ delay: 3000 }}
                keyboard
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                zoom
                navigation
                spaceBetween={10}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 5 },
                  600: { slidesPerView: 1.2, spaceBetween: 10 },
                  1024: { slidesPerView: 2, spaceBetween: 15 },
                }}
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="fixed-size-container">
                      <IonImg src={slide.url} alt={`Slide ${slide.id}`} className="menu__swiper-img" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </IonCol>
          </IonRow>

          <IonRow className="menu__row--mid">
            <IonCol className="menu__col--mid">
              <IonRow>
                <IonCol>
                  <IonText>
                    <h2 className="title1">Explora las categorías</h2>
                  </IonText>
                </IonCol>
              </IonRow>

              <div className="menu__carousel">
                {categories.map((category) => (
                  <div key={category._id} className="menu_carousel--item">
                    <IonRouterLink routerLink={`/ProductoCategoria/${category._id}`} className="NombreProduct">
                      <IonAvatar>
                        <img
                          src={category.image || 'https://via.placeholder.com/150'}
                          onError={(e) => (e.currentTarget.src = "https://i1.sndcdn.com/artworks-ktbPzWaFZBfOtTD3-R91Rdg-t500x500.jpg")}
                        />
                      </IonAvatar>
                      <IonText>{category.name}</IonText>
                    </IonRouterLink>
                  </div>
                ))}
              </div>
            </IonCol>
          </IonRow>

          <IonRow className="menu__row--bottom">
            <IonCol className="menu__col--bottom">
              <IonRow>
                <IonCol>
                  <IonText>
                    <h2 className="title1">Nuestros vendedores</h2>
                  </IonText>
                </IonCol>
              </IonRow>

              <div className="menu__vendedores">
                {sellers.map((seller) => (
                  <div key={seller._id} className="menu_vendedores--item">
                    <IonRouterLink routerLink={`/PerfilUsers/${seller._id}`} className="NombreProduct">
                      <IonAvatar>
                        <img
                          src={seller.image || 'https://via.placeholder.com/150'}
                          alt={seller.name}
                          onError={(e) => (e.currentTarget.src = "https://example.com/backup-image.jpg")} // Imagen de respaldo
                        />
                      </IonAvatar>
                      <IonText>{seller.name}</IonText>
                    </IonRouterLink>
                  </div>
                ))}
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
