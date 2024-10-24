import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonicSlides, IonGrid, IonRow, IonCol, IonImg, IonText, IonAvatar, IonItem, IonRouterLink } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Navigation } from 'swiper/modules';
import './Tab1.css';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';
import { Route } from 'react-router';

const Tab1: React.FC = () => {
  const slides = [
    {
      id: 1,
      url: 'https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg',
    },
    {
      id: 2,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aRBSpcZECkFYRL4g4j4aneJQwGI0KzGUrA&s',
    },
    {
      id: 3,
      url: 'https://www.paulinacocina.net/wp-content/uploads/2020/08/tacos-meat-food-mexican-lunch-dinner-640x480.jpg',
    },
    {
      id: 4,
      url: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/52bf/live/5bc2da50-f03a-11ee-93c8-19dcc8295613.jpg.webp',
    },
  ];
  const categorias = [
    {
      id: 1,
      img: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg',
      nombre: 'Pastas',
    },
    {
      id: 2,
      img: 'https://www.maizycacao.com.au/static/bb61178af8405ff7dcf008da0b34414c/83cf1/Tacos.png',
      nombre: 'Tacos',
    },
    {
      id: 3,
      img: 'https://www.shutterstock.com/image-photo/assortment-sweet-desserts-isolated-on-260nw-2473437115.jpg',
      nombre: 'Postres',
    },
    {
      id: 4,
      img: 'https://m.media-amazon.com/images/I/91Z9CwJL9hL._AC_UF1000,1000_QL80_.jpg',
      nombre: 'Dulces',
    },
    {
      id: 5,
      img: 'https://www.cnature.es/wp-content/uploads/elementor/thumbs/hamburguesa-con-guacamole-qatb9dfxztr5an44q7dowb74i3r76ru30c25o10ymw.jpg',
      nombre: 'Borgar',
    },
    {
      id: 6,
      img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/62FAD752-6853-4822-956D-C77F6F96D4E6/Derivates/92BABE34-B56B-42AC-A347-ACE3376EA303.jpg',
      nombre: 'Tortas',
    },
    {
      id: 7,
      img: 'https://static.wikia.nocookie.net/ivansitorechulonlosdibujosmolanmogollon/images/a/ac/1c70a9e620f3618787fdecebc7559d2d.jpg/revision/latest/scale-to-width-down/480?cb=20201019010947&path-prefix=es',
      nombre: 'Ete sech',
    },
    {
      id: 8,
      img: 'https://static.wikia.nocookie.net/ivansitorechulonlosdibujosmolanmogollon/images/e/e0/Elpepe.png/revision/latest?cb=20201019011402&path-prefix=es',
      nombre: 'El pepe',
    },

  ];
  const vendedores = [
    {
      id: 1,
      nombre: 'Luis',
      img: 'https://thumbs.dreamstime.com/b/retrato-de-un-hombre-apuesto-19987550.jpg',
    },
    {
      id: 2,
      nombre: 'Maria',
      img: 'https://img.freepik.com/fotos-premium/mujer-vieja-muy-fea-nariz-grande-boca-pequena-gafas-ojos_954932-1104.jpg',
    },
    {
      id: 3,
      nombre: 'Juan',
      img: 'https://static5.depositphotos.com/1040226/462/i/450/depositphotos_4625972-stock-photo-man-showing-his-realistic-vampire.jpg',
    },
    {
      id: 4,
      nombre: 'Ana',
      img: 'https://i.ytimg.com/vi/Ghsjcj47E04/maxresdefault.jpg',
    },
    {
      id: 5,
      nombre: 'Carlos',
      img: 'https://thumbs.dreamstime.com/b/hombre-hermoso-33633873.jpg',
    },
    {
      id: 6,
      nombre: 'Sofia',
      img: '6',
    }
  ]

  return (
    <IonPage>
      <IonContent>
        <IonGrid className="menu">
          <IonRow className='menu__row--top'>
            <IonCol className='menu__col--top'>
              <IonImg
                className="menu__logo--img"
                src="src\assets\images\utfeast-logo.svg"
                alt="UTFeast Logo"
              ></IonImg>
              <Swiper
                className='menu__swiper'
                modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides, Navigation]}
                autoplay={true}
                keyboard={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                zoom={true}
                navigation={true}
                slidesPerView={1.5}
                spaceBetween={5}
              >
                {slides.map(slide => (
                  <SwiperSlide key={slide.id}>
                    <IonImg src={slide.url} alt={`Slide ${slide.id}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </IonCol>
          </IonRow>
          <IonRow className='menu__row--mid'>
            <IonCol className='menu__col--mid'>
              <IonRow>
                <IonCol>
                  <IonText>
                    <h2>Explora las categorias</h2>
                  </IonText>
                </IonCol>
              </IonRow>

              <div className='menu__carousel'>
                {categorias.map((categoria) => (
                  <div key={categoria.id} className="menu_carousel--item">

                    <IonRouterLink routerLink='/ProductoCategoria' style={{textDecoration: 'none'}}>
                      <IonAvatar>
                        <img src={categoria.img} />
                      </IonAvatar>
                      <IonText>{categoria.nombre}</IonText>
                    </IonRouterLink>

                  </div>
                ))}
              </div>

            </IonCol>
          </IonRow>
          <IonRow className='menu__row--bottom'>
            <IonCol className='menu__col--bottom'>
              <IonRow>
                <IonCol>
                  <IonText>
                    <h2>Nuestros vendedores</h2>
                  </IonText>
                </IonCol>
              </IonRow>

              <div className='menu__vendedores'>
                {vendedores.map((vendedor) => (
                  <div key={vendedor.id} className="menu_vendedores--item">

                    <IonAvatar>
                      <img src={vendedor.img} />
                    </IonAvatar>
                    <IonText>{vendedor.nombre}</IonText>
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