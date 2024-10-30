import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonFab,
  IonFabButton,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, person, search, addCircle, bagAdd, add } from 'ionicons/icons';

// Define your routes here
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Buscador/Tab2';
import Tab3 from './pages/Tab3';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProductoCategoria from './pages/producto-categoria/ProductoCategoria';
import ProductInfo from './pages/ProductInfo/productInfo';
import CreateProduct from './pages/CrearProducto/CreateProduct';
import EditarPerfil from './pages/EditarPerfil/EditarPerfil';
import Perfil from './pages/Perfil/perfil';
import MasProductos from './pages/VerMas/MasProductos';
import MisProductos from './pages/MisProductos/MisProductos';
import Verify from './pages/register/Verify';
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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
setupIonicReact();

const App: React.FC = () => (
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
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/Verify">
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
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
