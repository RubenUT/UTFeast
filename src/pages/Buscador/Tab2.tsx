import React, { useState } from 'react';
import { IonItem, IonList, IonSearchbar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

function Tab2() {
  const data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  let [results, setResults] = useState([...data]);

  const handleInput = (ev: Event) => {
    let query = (ev.target as HTMLInputElement).value.toLowerCase();
    setResults(data.filter(item => item.toLowerCase().includes(query)));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar onIonInput={handleInput}></IonSearchbar>
        <IonList>
          {results.map((item, index) => (
            <IonItem key={index}>
              {item}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Tab2;