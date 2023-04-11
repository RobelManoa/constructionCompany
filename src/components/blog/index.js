import React from 'react';
import image4 from '../image/image4.jpg';
import image5 from '../image/image5.jpg';
import image6 from '../image/image6.jpg';

function Blogs() {
  return (
    <div>
      <div className="blogs" id="blogs">
  		<h1>Blog de l'entreprise</h1>

  		<div className="BCard">
  			<div className="blog-card" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
    			<div className="blog-card-image">
      				<img src={image4} alt="ImageDuBlog"/>
    			</div>
    			<div className="blog-card-content">
      				<h2>Comment choisir le bon entrepreneur pour votre projet de construction</h2>
      				<p>Choisir le bon entrepreneur pour votre projet de construction est crucial. Voici quelques étapes à suivre : évaluez vos besoins en construction et en rénovation, vérifiez la licence et l'assurance de l'entrepreneur, examinez les références et les antécédents de l'entrepreneur, obtenez des devis détaillés et comparez-les</p>
      				<a href="/" className="button">Lire la suite</a>
    			</div>
  			</div>
  			<div className="blog-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
    			<div className="blog-card-image">
      				<img src={image5} alt="ImageDuBlog"/>
    			</div>
    			<div className="blog-card-content">
      				<h2>Les tendances de design et de construction en 2023</h2>
      				<p>La construction durable : Les entreprises de construction sont de plus en plus conscientes de l'importance de la durabilité et de l'impact environnemental de leurs projets. En utilisant des matériaux et des techniques durables, ils peuvent minimiser leur empreinte carbone et créer des bâtiments plus respectueux de l'environnement.</p>
      				<a href="/" className="button">Lire la suite</a>
    			</div>
  			</div>
  			<div className="blog-card" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
    			<div className="blog-card-image">
      				<img src={image6} alt="ImageDuBlog"/>
    			</div>
    			<div className="blog-card-content">
      				<h2>Les étapes clés pour une rénovation réussie de votre maison</h2>
      				<p>La rénovation de votre maison peut être une entreprise passionnante mais complexe. Pour réussir votre projet, il est important de suivre plusieurs étapes clés. Tout d'abord, établissez un budget réaliste et identifiez les domaines à rénover. Ensuite, engagez des professionnels qualifiés et assurez-vous de disposer des permis nécessaires.</p>
      				<a href="/" class="button">Lire la suite</a>
    			</div>
  			</div>
  		</div>
	  </div>
    </div>
  );
}

export default Blogs;
