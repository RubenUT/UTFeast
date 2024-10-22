import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonicSlides, IonGrid, IonRow, IonCol, IonImg, IonText } from '@ionic/react';
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
      title: 'Slide 1',
      description: 'Slide 1 Description',
    },
    {
      id: 2,
      title: 'Slide 2',
      description: 'Slide 2 Description',
    },
    {
      id: 3,
      title: 'Slide 3',
      description: 'Slide 3 Description',
    },
    {
      id: 4,
      title: 'Slide 4',
      description: 'Slide 4 Description',
    },
  ];
  const Categorias = [
    {
      id: 1,
      img: '1',
      nombre: 'Categoria',
    },
    {
      id: 2,
      img: '2',
      nombre: 'Categoria',
    },
    {
      id: 3,
      img: '3',
      nombre: 'Categoria',
    },
    {
      id: 4,
      img: '4',
      nombre: 'Categoria',
    },
    {
      id: 5,
      img: '5',
      nombre: 'Categoria',
    },
    {
      id: 6,
      img: '6',
      nombre: 'Categoria',
    },
    {
      id: 7,
      img: '7',
      nombre: 'Categoria',
    },
    {
      id: 8,
      img: '8',
      nombre: 'Categoria',
    },

  ];
  const vendedores = [
    {
      id: 1,
      nombre: 'Luis',
      img: '1',
    },
    {
      id: 2,
      nombre: 'Maria',
      img: '2',
    },
    {
      id: 3,
      nombre: 'Juan',
      img: '3',
    },
    {
      id: 4,
      nombre: 'Ana',
      img: '4',
    },
    {
      id: 5,
      nombre: 'Carlos',
      img: '5',
    },
    {
      id: 6,
      nombre: 'Sofia',
      img: '6',
    }
  ]

  return (
    <IonGrid>
      <IonRow>
        <IonPage>
          <IonContent>
            <IonImg src="https://via.placeholder.com/800x200" className="centered-image" />
            <Swiper
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
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>{slide.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      {slide.description}
                    </IonCardContent>
                  </IonCard>
                </SwiperSlide>
              ))}
            </Swiper>
            <IonTitle>Explorar Categorias</IonTitle>
            <div className="Cardscategorias">
              {Categorias.map(categoria => (
                <IonCard key={categoria.id} className="Categorias">
                  <IonImg src={`https://via.placeholder.com/200x200?text=${categoria.img}`} className="centered-image" />
                  <IonCardHeader>
                    <IonCardSubtitle>{categoria.nombre}</IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              ))}
            </div>
            <IonTitle>Los vendedores favoritos</IonTitle>
            <div className="Cardscategorias">
              {vendedores.map(vendedores => (
                <IonCard key={vendedores.id} className="Categorias">
                  <IonImg src={`https://via.placeholder.com/200x200?text=${vendedores.img}`} className="centered-image" />
                  <IonCardHeader>
                    <IonCardSubtitle>{vendedores.nombre}</IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              ))}
            </div>
          </IonContent>
        </IonPage>
      </IonRow>
    </IonGrid>
  );
};

export default Tab1;