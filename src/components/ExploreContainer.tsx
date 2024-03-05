import './ExploreContainer.css';
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';


interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
    <img alt="Hello World!" src="https://miro.medium.com/v2/resize:fit:1400/1*veRna0Vbw1_4OUnzW9rSzA.jpeg" />
    <IonCardHeader>
      <IonCardTitle>Hello World</IonCardTitle>
      <IonCardSubtitle>Wa ra gud</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
  </IonCard>
  );
};

export default ExploreContainer;
