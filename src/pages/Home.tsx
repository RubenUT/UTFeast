import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
    interface DataType {
        message: string;
    }

    const [data, setData] = useState<DataType | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5100');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Mi App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {data ? <p>{data.message}</p> : <p>Cargando...</p>}
            </IonContent>
        </IonPage>
    );
};

export default Home;
