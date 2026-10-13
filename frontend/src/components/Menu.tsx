import React, { useState } from 'react';
import './Menu.css';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample menu data - in a real app, this would come from an API
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Chicken Biryani',
      description: 'Fragrant basmati rice cooked with tender chicken pieces and aromatic spices',
      price: 12.99,
      image: '/chicken-biryani.jpg',
      category: 'biryani'
    },
    {
      id: 2,
      name: 'Mutton Rogan Josh',
      description: 'Tender mutton pieces cooked in a rich and flavorful gravy',
      price: 15.99,
      image: '/Mutton Rogan Josh _ Mutton Curry generate image in 4k quality.jpg',
      category: 'curry'
    },
    {
      id: 3,
      name: 'Fish Fry',
      description: 'Fresh fish marinated with spices and deep fried to perfection',
      price: 13.99,
      image: '/Fish Fry (Masala_Seer Fish Fry) generate image in 4k quality in 340x250.jpg',
      category: 'seafood'
    },
    {
      id: 4,
      name: 'Butter Chicken',
      description: 'Tender chicken pieces in a rich, creamy tomato sauce',
      price: 14.99,
      image: '/Butter Chicken with Naan_Parotta images generate in 4k quality in full image.jpg',
      category: 'curry'
    },
    {
      id: 5,
      name: 'Veg Meals',
      description: 'Traditional vegetarian thali with rice, sambar, and assorted sides',
      price: 10.99,
      image: '/vegmeals.jpg',
      category: 'vegetarian'
    },
    {
      id: 6,
      name: 'Arabic Mandi',
      description: 'Fragrant rice dish with tender meat, traditional Arabic spices',
      price: 16.99,
      image: '/mandi.jpg',
      category: 'arabic'
    },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'biryani', name: 'Biryani' },
    { id: 'curry', name: 'Curry' },
    { id: 'seafood', name: 'Seafood' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'arabic', name: 'Arabic' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Menu</h2>
      
      <div className="category-filter">
        {categories.map(category => (
          <button 
            key={category.id}
            className={activeCategory === category.id ? 'active' : ''}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="menu-items">
        {filteredItems.map(item => (
          <div className="menu-item" key={item.id}>
            <div className="menu-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="menu-item-price">${item.price.toFixed(2)}</div>
              <button className="order-button">Add to Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;