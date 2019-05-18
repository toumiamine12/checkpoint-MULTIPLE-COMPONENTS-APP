import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logo2 from './logo2.png';
import Box from "./box"
import yahya from './yahya.PNG'
import amine from './amine.PNG'
import arsslen from './arsslen.PNG'
import sameh from './sameh.PNG'
import Card from './components'
import Chif from './quelque'
import Imge from './image'
import tunis from './tunis.PNG'
import sousse from './sousse.PNG'
import sfax from './sfax.PNG'
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="head">NOS PROGRAMMES</h1> 
      <div className="all">
        <Card name="FULL TIME PROGRAM" par="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Aliquid ad reprehenderit ratione expedita, consectetur veniam sed nihil, dolor corporis,
          deserunt corrupti praesentium accusantium nemo debitis nobis modi magni? Facere, cumque!" style={{background : "rgb(150, 232, 252)"}}/>
        <Card name="PART TIME PROGRAM" par="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ad reprehenderit ratione expedita, consectetur veniam sed nihil, dolor corporis,
         deserunt corrupti praesentium accusantium nemo debitis nobis modi magni? Facere, cumque!" style={{background : "red"}}/>
        <Card name="KIDS CODING PROGRAM" par="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ad reprehenderit ratione expedita, consectetur veniam sed nihil,
         dolor corporis, deserunt corrupti praesentium accusantium nemo debitis nobis modi magni? Facere, cumque!" style={{background : "rgb(17, 202, 235)"}}/>
        <Card name="SUMMER ACADEMY" par="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ad reprehenderit ratione expedita, consectetur veniam sed nihil,
         dolor corporis, deserunt corrupti praesentium accusantium nemo debitis nobis modi magni? Facere, cumque!" style={{background : "rgb(88, 142, 212)"}}/>
      </div>
      <div className="quelque">
       <h1 className="head">QUELQUES CHIFFRES </h1>
       <div classname="chifcontainer">
       <Chif chif="+20,000" para4="PASSIONNES DU DIGITAL "/>
       <Chif chif="+500" para4="ETUDIANTS DEPUITS LE DEMARRAGE EN AOUT 2016 "/>
       <Chif chif="+300" para4="PRODUITS DEVELOPPE "/>
       <Chif chif="+30  " para4="INSTRUCTEUR GAME, WEB ET MOBILE "/>
       <Chif chif="+50" para4="SPEAKERS "/>
       <Chif chif="400m²" para4="DE HACKERSPACE AU COEUR DU LAC 1"/></div>
      </div>
      <div>
        <center><h3>Ou se passent les sessions ?</h3>
        <h6>les sessions se passent dans les Hackerspaces de GOMYCODE dans les villes suivantes: l'hébergement est possible dans la limite des places disponible.</h6></center>
      </div>
      <div className="img1">
        <Imge img={tunis} locate="Tunis"/>
        <Imge img={sousse} locate="Sousse"/>
        <Imge img={sfax} locate="Sfax"/>
      </div>
      </div>
    );
  }
}

export default App;
