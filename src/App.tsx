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

setupIonicReact();

const App: React.FC = () => {
  const location = useLocation();
  const [showTabs, setShowTabs] = useState(false);

  useEffect(() => {
    setShowTabs(!['/login', '/register'].includes(location.pathname));
  }, [location]);
  
  useEffect(() => {
    setShowTabs(!['/login', '/register'].includes(location.pathname));
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/verify">
              <Verify />
            </Route>
            <Route exact path="/Producto-Information">
              <ProductInfo />
            </Route>
            <Route exact path="/EditarPerfil">
              <EditarPerfil />
            </Route>
            <Route exact path="/ProductoCategoria">
              <ProductoCategoria />
            </Route>
            <Route exact path="/MisProductos">
              <MisProductos />
            </Route>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/Agregar-Producto">
              <CreateProduct />
            </Route>
            <Route exact path="/MasProductos">
              <MasProductos />
            </Route>
            <Route exact path="/Editar-Perfil">
              <EditarPerfil />
            </Route>
            <Route exact path="/Perfil">
              <Perfil />
            </Route>
            <Route exact path="/ProductoFavorito">
              <ProductoFavorito />
            </Route>
            <Route exact path="/PerfilUsers">
              <PerfilUsers />
            </Route>
            <Route exact path="/ProductosVendedor">
              <ProductosVendedor />
            </Route>
            <Route exact path="/EditarProducto">
              <EditProduct />
            </Route>
            <Route exact path="/SobreLaEmpresa">
              <CompanyInfo />
            </Route>
          </IonRouterOutlet>

          {showTabs && (
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon aria-hidden="true" icon={home} />
              </IonTabButton>

              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon aria-hidden="true" icon={search} />
              </IonTabButton>

              <IonTabButton tab="add" href="/Agregar-Producto" className="center-tab-button">
                <IonIcon icon={add} />
              </IonTabButton>

              <IonTabButton tab="perfil" href="/Perfil">
                <IonIcon aria-hidden="true" icon={person} />
              </IonTabButton>
            </IonTabBar>
          )}
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;