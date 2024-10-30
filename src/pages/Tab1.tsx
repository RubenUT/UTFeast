import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonicSlides, IonGrid, IonRow, IonCol, IonImg, IonText, IonAvatar, IonItem, IonRouterLink } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Navigation } from 'swiper/modules';
import { useState } from 'react';
import './Tab1.css';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';
import NoInternetConnection from '../components/NoInternet/NoInternetConection';

const Tab1: React.FC = () => {
  const [noInternet, setNoInternet] = useState(false);

  const slides = [
    { id: 1, url: 'https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg' },
    { id: 2, url: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Platos-de-comida-que-pides-a-domicilio-y-puedes-hacer-en-casa.jpg' },
    { id: 3, url: 'https://www.paulinacocina.net/wp-content/uploads/2020/08/tacos-meat-food-mexican-lunch-dinner-640x480.jpg' },
    { id: 4, url: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/52bf/live/5bc2da50-f03a-11ee-93c8-19dcc8295613.jpg.webp' },
    { id: 5, url: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg' },
  ];

  const categorias = [
    { id: 1, img: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg', nombre: 'Pastas' },
    { id: 2, img: 'https://www.maizycacao.com.au/static/bb61178af8405ff7dcf008da0b34414c/83cf1/Tacos.png', nombre: 'Tacos' },
    { id: 3, img: 'https://www.shutterstock.com/image-photo/assortment-sweet-desserts-isolated-on-260nw-2473437115.jpg', nombre: 'Postres' },
    { id: 4, img: 'https://m.media-amazon.com/images/I/91Z9CwJL9hL._AC_UF1000,1000_QL80_.jpg', nombre: 'Dulces' },
    { id: 5, img: 'https://www.cnature.es/wp-content/uploads/elementor/thumbs/hamburguesa-con-guacamole-qatb9dfxztr5an44q7dowb74i3r76ru30c25o10ymw.jpg', nombre: 'Borgar' },
    { id: 6, img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/62FAD752-6853-4822-956D-C77F6F96D4E6/Derivates/92BABE34-B56B-42AC-A347-ACE3376EA303.jpg', nombre: 'Tortas' },
  ];

  const vendedores = [
    { id: 1, nombre: 'Luis', img: 'https://thumbs.dreamstime.com/b/retrato-de-un-hombre-apuesto-19987550.jpg' },
    { id: 2, nombre: 'Maria', img: 'https://img.freepik.com/fotos-premium/mujer-vieja-muy-fea-nariz-grande-boca-pequena-gafas-ojos_954932-1104.jpg' },
    { id: 3, nombre: 'Juan', img: 'https://static5.depositphotos.com/1040226/462/i/450/depositphotos_4625972-stock-photo-man-showing-his-realistic-vampire.jpg' },
    { id: 4, nombre: 'Ana', img: 'https://i.ytimg.com/vi/Ghsjcj47E04/maxresdefault.jpg' },
    { id: 5, nombre: 'Carlos', img: 'https://thumbs.dreamstime.com/b/hombre-hermoso-33633873.jpg' },
    { id: 6, nombre: 'Sofia', img: 'https://i1.sndcdn.com/artworks-ktbPzWaFZBfOtTD3-R91Rdg-t500x500.jpg' }
  ];

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
                {categorias.map((categoria) => (
                  <div key={categoria.id} className="menu_carousel--item">
                    <IonRouterLink routerLink="/ProductoCategoria" className="NombreProduct">
                      <IonAvatar>
                        <img
                          src={categoria.img}
                          alt={categoria.nombre}
                          onError={(e) => (e.currentTarget.src = "https://i1.sndcdn.com/artworks-ktbPzWaFZBfOtTD3-R91Rdg-t500x500.jpg")}
                        />
                      </IonAvatar>
                      <IonText>{categoria.nombre}</IonText>
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
                {vendedores.map((vendedor) => (
                  <div key={vendedor.id} className="menu_vendedores--item">
                    <IonRouterLink routerLink="/PerfilUsers" className="NombreProduct">
                      <IonAvatar>
                        <img
                          src={vendedor.img}
                          alt={vendedor.nombre}
                          onError={(e) => (e.currentTarget.src = "https://example.com/backup-image.jpg")} // Imagen de respaldo
                        />
                      </IonAvatar>
                      <IonText>{vendedor.nombre}</IonText>
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
