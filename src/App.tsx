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
import { home, person, search, add } from 'ionicons/icons';
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
            <ProtectedRoute exact path="/tab2" component={Tab2} />
            <ProtectedRoute exact path="/Perfil" component={Perfil} />
            <ProtectedRoute exact path="/Producto-Information" component={ProductInfo} />
            <ProtectedRoute exact path="/EditarPerfil" component={EditarPerfil} />
            <ProtectedRoute exact path="/ProductoCategoria" component={ProductoCategoria} />
            <ProtectedRoute exact path="/MisProductos" component={MisProductos} />
            <ProtectedRoute exact path="/Agregar-Producto" component={CreateProduct} />
            <ProtectedRoute exact path="/MasProductos" component={MasProductos} />
            <ProtectedRoute exact path="/ProductoFavorito" component={ProductoFavorito} />
            <ProtectedRoute exact path="/PerfilUsers" component={PerfilUsers} />
            <ProtectedRoute exact path="/ProductosVendedor" component={ProductosVendedor} />
            <ProtectedRoute exact path="/EditarProducto" component={EditProduct} />
            <ProtectedRoute exact path="/SobreLaEmpresa" component={CompanyInfo} />
            
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </IonRouterOutlet>

          {showNavBar && <NavBar />}
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;