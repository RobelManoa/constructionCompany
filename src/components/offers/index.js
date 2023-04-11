import React from 'react';
import image1 from '../image/image1.jpg';
import image2 from '../image/image2.avif';
import image3 from '../image/image3.png';

function Offers() {
  return (
    <div>
      <div class="offers" id="offers">
		      <h1 data-aos-delay="300" data-aos="fade-up" data-aos-duration="3000">Voirs nos offres</h1>
		      <div class="cardBanner">
			      <div class="card" data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-delay="600">
				      <div class="imgCard">
				      	<img src={image1} alt="imageMaisonIndividuelle"/>
				      </div>
				      <div class="textCard">
					      <h2>Construction de maisons individuelles</h2>
					      <p>Des maisons personnalisées selon les besoins et les souhaits des clients</p>
				      </div>
			      </div>
			    <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500">
				    <div class="imgCard">
					    <img src={image3} alt="imageRenovation"/>
				    </div>
				    <div class="textCard">
					    <h2>Rénovation de maisons et d'appartements</h2>
					    <p>Notres entreprises de construction proposent des services de rénovation pour les maisons et les appartements existants</p>
				    </div>
			    </div>
			    <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
				  <div class="imgCard">
					  <img src={image1} alt="imageConstrutionBatiment"/>
				  </div>
				  <div class="textCard">
					  <h2>Construction de bâtiments commerciaux</h2>
					  <p>Nous proposons des services pour la construction de bâtiments commerciaux, tels que des bureaux, des magasins, des entrepôts, etc.</p>
				  </div>
			  </div>
			  <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
				  <div class="imgCard">
					  <img src={image2} alt="imageTravauxTerrassement"/>
				  </div>
				  <div class="textCard">
					  <h2>Travaux de terrassement</h2>
					  <p>Notres entreprises de construction propose des services de terrassement, qui comprennent la préparation du terrain pour la construction, la création de fondations et d'infrastructures souterraines, etc.</p>
				  </div>
			  </div>
		  </div>
	  </div>
    </div>
  );
}

export default Offers;
