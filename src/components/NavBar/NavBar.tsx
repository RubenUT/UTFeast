import { IonIcon, IonTabBar, IonTabButton, useIonRouter } from "@ionic/react";
import { addOutline, homeOutline, personOutline, searchOutline } from "ionicons/icons";
import './NavBar.css';

const NavBar: React.FC = () => {
    const router = useIonRouter();

    const handleNavigation = (path: string) => {
        router.push(path, 'forward');
    };

    return (
        <IonTabBar slot="bottom">
            <IonTabButton onClick={() => handleNavigation('/tab1')}>
                <IonIcon aria-hidden="true" icon={homeOutline} />
            </IonTabButton>

            <IonTabButton onClick={() => handleNavigation('/tab2')}>
                <IonIcon aria-hidden="true" icon={searchOutline} />
            </IonTabButton>

            <IonTabButton onClick={() => handleNavigation('/Agregar-Producto')} className="center-tab-button">
                <IonIcon icon={addOutline} />
            </IonTabButton>

            <IonTabButton onClick={() => handleNavigation('/Perfil')}>
                <IonIcon aria-hidden="true" icon={personOutline} />
            </IonTabButton>
        </IonTabBar>
    );
};

export default NavBar;