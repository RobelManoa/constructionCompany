// Sélection des éléments HTML
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const images = document.querySelectorAll('.carousel-images img');

// Définition de l'index de l'image affichée
let currentImageIndex = 0;

// Définition de la durée de défilement automatique en millisecondes
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
