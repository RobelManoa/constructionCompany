import React from 'react';

function Contacts() {
  return (
    <div>
      <div className="contacts" id="contacts">
		<h1>Nous joindre?</h1>
		<ul>
			<li>Adresse Mail : <a href="mailto:contact@monentreprise.com">constructioncompany@gmail.com</a></li>
			<li>Telephone : <a href="tel:0123456789">+261 34 50 963 41</a></li>
			<li><a href="https://wa.me/33612345678">Nous contacter sur Whatsapp?</a></li>
		</ul>
		  <h1>Prendre commande?</h1>
		  <form action="/" method="post">
  		  <label for="nom">Nom du réservateur :</label>
  		  <input type="text" id="nom" name="nom" required/>

  		  <label for="email">Email :</label>
  		  <input type="email" id="email" name="email" required/>

			  <label for="telephone">Téléphone :</label>
		    <input type="tel" id="telephone" name="telephone" required/>

  		  <label for="commande">Commande d'un(e) :</label>
  		    <select id="commande" name="commande">
    		    <option value="entreprise">Entreprise</option>
    		    <option value="individuelle">Individuelle</option>
  		    </select>

  		    <label for="type_commande">Type de commande :</label>
  		    <select id="type_commande" name="type_commande">
    		    <option value="construction_maison">Construction de maison</option>
    		    <option value="construction_batiment_commercial">Construction d'un bâtiment commercial</option>
    		    <option value="renovation">Rénovation</option>
    		    <option value="terrassement">Terrassement</option>
  		    </select>

  		    <label for="exigence">Exigences :</label>
  		    <textarea id="exigence" name="exigence" rows="4" cols="50"></textarea><br/>

  		    <input type="submit" value="Valider"/>
		    </form>
	    </div>
    </div>
  );
}

export default Contacts;
