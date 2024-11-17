import { Redirect, Route, useLocation } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addOutline, homeOutline, personOutline, searchOutline } from "ionicons/icons";
import { useState, useEffect } from 'react';

// Import your pages
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Buscador/Tab2';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Verify from './pages/register/Verify';
import ProductoCategoria from './pages/producto-categoria/ProductoCategoria';
import ProductInfo from './pages/ProductInfo/productInfo';
import CreateProduct from './pages/CrearProducto/CreateProduct';
import EditarPerfil from './pages/EditarPerfil/EditarPerfil';
import Perfil from './pages/Perfil/perfil';
import MasProductos from './pages/VerMas/MasProductos';
import MisProductos from './pages/MisProductos/MisProductos';
import ProductoFavorito from './pages/ProductFav/ProductoFav';
import PerfilUsers from './pages/PerfilUsers/PerfilUsers';
import ProductosVendedor from './pages/ProductosVendedor/ProductosVendedor';
import EditProduct from './pages/EditarProducto/EditarProduct';
import CompanyInfo from './pages/SobreLaEmpresa/EmpresaInfo';
import CreatedProduct from './pages/ProductInfo/CreatedProduct';
import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoute';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ErrorScreen from './components/ProtectedRoutes/ErrorScreen';
import NavBar from './components/NavBar/NavBar';

setupIonicReact();

const App: React.FC = () => {
  const location = useLocation();
  const showNavBarRoutes = [
    'tab1','tab2','Perfil','Producto-Information',
    'EditarPerfil','ProductoCategoria','MisProductos',
    'Agregar-Producto','MasProductos','ProductoFavorito',
    'PerfilUsers','ProductosVendedor','EditarProducto','SobreLaEmpresa'
  ]

  const showNavBar = showNavBarRoutes.includes(location.pathname.split('/')[1]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
        <IonRouterOutlet>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/verify" component={Verify} />
            <Route exact path="/error" component={ErrorScreen}/>
            
            <ProtectedRoute exact path="/tab1" component={Tab1} />
            <Route exact path="/tab2" component={Tab2} />
            <Route exact path="/Perfil" component={Perfil} />
            <Route exact path="/ProductInfo/:_id" component={ProductInfo} />
            <Route path="/CreatedProduct/:productId" component={CreatedProduct} />
            <Route exact path="/EditarPerfil" component={EditarPerfil} />
            <Route exact path="/ProductoCategoria/:categoryId" component={ProductoCategoria} />
            <Route exact path="/MisProductos" component={MisProductos} />
            <Route exact path="/Agregar-Producto" component={CreateProduct} />
            <Route exact path="/MasProductos" component={MasProductos} />
            <Route exact path="/ProductoFavorito" component={ProductoFavorito} />
            <Route exact path="/PerfilUsers" component={PerfilUsers} />
            <Route exact path="/ProductosVendedor" component={ProductosVendedor} />
            <Route exact path="/EditarProducto" component={EditProduct} />
            <Route exact path="/SobreLaEmpresa" component={CompanyInfo} />
            
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </IonRouterOutlet>

          {showNavBar && (
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon aria-hidden="true" icon={homeOutline} />
              </IonTabButton>

              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon aria-hidden="true" icon={searchOutline} />
              </IonTabButton>

              <IonTabButton tab="add" href="/Agregar-Producto" className="center-tab-button">
                <IonIcon icon={addOutline} />
              </IonTabButton>

              <IonTabButton tab="perfil" href="/Perfil">
                <IonIcon aria-hidden="true" icon={personOutline} />
              </IonTabButton>
            </IonTabBar>
          )}
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;