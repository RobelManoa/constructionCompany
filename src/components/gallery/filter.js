import React, { useState } from 'react';
import image2 from '../image/image2.avif';
import image6 from '../image/image6.jpg';
import image7 from '../image/image7.jpeg';
import image8 from '../image/image8.jpg';
import image9 from '../image/image9.jpg';
import image10 from '../image/image10.jpg';
import image11 from '../image/image11.jpg';
import image12 from '../image/image12.jpg';

function Gallery() {
  const [currentFilter, setCurrentFilter] = useState('all');

  const images = [
    { src: image7, alt: 'Maison individuelle', tags: 'house' },
    { src: image6, alt: 'Rénovation', tags: 'renovation' },
    { src: image10, alt: 'Bâtiment commercial', tags: 'commercial' },
    { src: image2, alt: 'Terrassement', tags: 'earthwork' },
    { src: image8, alt: 'Maison individuelle', tags: 'house' },
    { src: image9, alt: 'Rénovation', tags: 'renovation' },
    { src: image11, alt: 'Bâtiment commercial', tags: 'commercial' },
    { src: image12, alt: 'Terrassement', tags: 'earthwork' },
  ];

  function filterImages(filter) {
    setCurrentFilter(filter);
    const imageElements = document.querySelectorAll('.container img');
    imageElements.forEach((image) => {
      if (filter === 'all' || image.dataset.tags.includes(filter)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }

  return (
    <div>
      <div className="gallery" id="gallerys">
        <h2>Voir nos Travaux?</h2>
        <div className="button-container">
          <button
            className={`filter-button ${currentFilter === 'all' ? 'active' : ''}`}
            onClick={() => filterImages('all')}
          >
            Tous
          </button>
          <button
            className={`filter-button ${currentFilter === 'house' ? 'active' : ''}`}
            onClick={() => filterImages('house')}
          >
            Maison individuelle
          </button>
          <button
            className={`filter-button ${currentFilter === 'renovation' ? 'active' : ''}`}
            onClick={() => filterImages('renovation')}
          >
            Rénovation
          </button>
          <button
            className={`filter-button ${currentFilter === 'commercial' ? 'active' : ''}`}
            onClick={() => filterImages('commercial')}
          >
            Bâtiment commercial
          </button>
          <button
            className={`filter-button ${currentFilter === 'earthwork' ? 'active' : ''}`}
            onClick={() => filterImages('earthwork')}
          >
            Terrassement
          </button>
        </div>
        <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              data-tags={image.tags}
              style={{ display: currentFilter === 'all' || image.tags === currentFilter ? 'block' : 'none' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
