const express = require('express');
const router = express.Router();

// Sample menu data - in a real app, this would come from a database
const menuItems = [
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

// Get all menu items
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: menuItems.length,
    data: menuItems
  });
});

// Get menu item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const menuItem = menuItems.find(item => item.id === id);
  
  if (!menuItem) {
    return res.status(404).json({
      success: false,
      message: 'Menu item not found'
    });
  }
  
  res.json({
    success: true,
    data: menuItem
  });
});

// Get menu items by category
router.get('/category/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  const filteredItems = category === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);
  
  res.json({
    success: true,
    count: filteredItems.length,
    data: filteredItems
  });
});

module.exports = router;