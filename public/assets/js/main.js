// Sélection des éléments HTML du carousel
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const images = document.querySelectorAll('.carousel-images img');
let currentImageIndex = 0;
const slideDuration = 3000;

// Fonction pour passer à l'image suivante
function nextSlide() {
  images[currentImageIndex].style.opacity = 0;
  images[currentImageIndex].style.pointerEvents = 'none';
  currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
  images[currentImageIndex].style.opacity = 1;
  images[currentImageIndex].style.pointerEvents = 'auto';
}

// Fonction pour passer à l'image précédente
function previousSlide() {
  images[currentImageIndex].style.opacity = 0;
  images[currentImageIndex].style.pointerEvents = 'none';
  currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
  images[currentImageIndex].style.opacity = 1;
  images[currentImageIndex].style.pointerEvents = 'auto';
}

// Ajout de l'écouteur d'événement pour le bouton précédent
previousButton.addEventListener('click', () => {
  previousSlide();
  resetTimer();
});

// Ajout de l'écouteur d'événement pour le bouton suivant
nextButton.addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

// Démarre le timer de défilement automatique
let slideTimer = setInterval(() => {
  nextSlide();
}, slideDuration);

// Fonction pour réinitialiser le timer de défilement automatique
function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    nextSlide();
  }, slideDuration);
}

// Sélection des éléments HTML pour le filtre
const buttons = document.querySelectorAll('.filter-button');
const images = document.querySelectorAll('.container img');

// Ajout de l'écouteur d'événement pour chaque bouton de filtre
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Supprime la classe 'active' de tous les boutons
    buttons.forEach(btn => btn.classList.remove('active'));
    // Ajoute la classe 'active' au bouton cliqué
    button.classList.add('active');
    const filter = button.dataset.filter;
    // Affiche ou masque les images en fonction du filtre sélectionné
    images.forEach(image => {
      if (filter === 'all' || image.dataset.tags.includes(filter)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});
