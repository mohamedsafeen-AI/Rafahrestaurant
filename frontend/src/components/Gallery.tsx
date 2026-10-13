import React from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
  // Sample gallery images - in a real app, these would come from an API
  const galleryImages = [
    {
      id: 1,
      src: '/Rafaha.jpg',
      alt: 'Restaurant Exterior',
      title: 'Our Restaurant'
    },
    {
      id: 2,
      src: '/Butter Chicken with Naan_Parotta images generate in 4k quality in full image.jpg',
      alt: 'Butter Chicken',
      title: 'Butter Chicken'
    },
    {
      id: 3,
      src: '/chicken-biryani.jpg',
      alt: 'Chicken Biryani',
      title: 'Chicken Biryani'
    },
    {
      id: 4,
      src: '/Fish Fry (Masala_Seer Fish Fry) generate image in 4k quality in 340x250.jpg',
      alt: 'Fish Fry',
      title: 'Fish Fry'
    },
    {
      id: 5,
      src: '/mandi.jpg',
      alt: 'Arabic Mandi',
      title: 'Arabic Mandi'
    },
    {
      id: 6,
      src: '/Mutton Rogan Josh _ Mutton Curry generate image in 4k quality.jpg',
      alt: 'Mutton Rogan Josh',
      title: 'Mutton Rogan Josh'
    },
    {
      id: 7,
      src: '/vegmeals.jpg',
      alt: 'Vegetarian Meals',
      title: 'Vegetarian Meals'
    },
    {
      id: 8,
      src: '/restaurant-interior.jpg',
      alt: 'Restaurant Interior',
      title: 'Dining Area'
    }
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Gallery</h2>
      <p className="gallery-subtitle">Take a visual tour of our restaurant and delicious dishes</p>
      
      <div className="gallery-grid">
        {galleryImages.map(image => (
          <div className="gallery-item" key={image.id}>
            <img src={image.src} alt={image.alt} />
            <div className="gallery-item-overlay">
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;