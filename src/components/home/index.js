import React, { useEffect } from "react";
import image1 from '../image/image1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      once: true // l'animation ne se joue qu'une seule fois
    });
  }, []);

  return (
    <div className="App">
      <div class="hero">
        <div class="welcome" data-aos="fade-right">
          <h3>Bienvenue chez</h3>
          <h1 class="texte-bondissant">Construction Company</h1>
          <p>Construiser un meilleur foyer <br/>On construit et vous serez ravis</p>
        </div>
        <div class="welcomeImage" data-aos="fade-left">
          <img src={image1} alt="imageAccueil"/>
        </div>
      </div>    
    </div>
  );
}

export default Home;
