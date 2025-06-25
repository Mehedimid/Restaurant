"use client";
import React, { useState } from 'react';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';

// Sample data for the dishes
const dishes = [
  {
    id: 1,
    name: 'Salad Fry',
    category: 'Breakfast',
    price: '$230',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2940&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    name: 'Chicken Breast',
    category: 'Lunch',
    price: '$230',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2880&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 3,
    name: 'Chicken Legs',
    category: 'Dinner',
    price: '$230',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2880&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 4,
    name: 'Fruit Basic',
    category: 'Lunch',
    price: '$230',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2880&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 5,
    name: 'Veggie salad',
    category: 'Dinner',
    price: '$230',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2940&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 6,
    name: 'Chicken Roll',
    category: 'Breakfast',
    price: '$230',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2880&auto=format&fit=crop',
    rating: 5,
  },
];

const DishCard = ({ dish }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
    <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
    <div className="p-4 flex justify-between">
      {/* name and star div  */}
      <div>
        <h3 className="text-lg font-bold text-gray-800">{dish.name}</h3>
        <div className="flex my-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < dish.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.24 3.827a1 1 0 00.95.69h4.024c.969 0 1.371 1.24.588 1.81l-3.257 2.364a1 1 0 00-.364 1.118l1.24 3.827c.3.921-.755 1.688-1.54 1.118l-3.257-2.364a1 1 0 00-1.175 0l-3.257 2.364c-.784.57-1.84-.197-1.54-1.118l1.24-3.827a1 1 0 00-.364-1.118L2.05 9.254c-.783-.57-.38-1.81.588-1.81h4.024a1 1 0 00.95-.69l1.24-3.827z" />
            </svg>
          ))}
        </div>
      </div>

      {/* category and price */}
      <div className="space-y-2 text-center">
        <div className="rounded-full px-4 py-2 bg-red-700 text-white text-sm">{dish.category}</div>
        <p className="text-xl font-bold text-gray-900">{dish.price}</p>
      </div>
    </div>
  </div>
);

const Dishes = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showFoodModal, setShowFoodModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [foodForm, setFoodForm] = useState({ name: '', price: '', rating: '', category: '' });
  const [newCategory, setNewCategory] = useState('');

  const categories = ['All', ...new Set(dishes.map(dish => dish.category))];

  const filteredDishes = activeCategory === 'All'
    ? dishes
    : dishes.filter(dish => dish.category === activeCategory);

  return (
    <section className="w-2/3 mx-auto">
      {/* Section Title */}
      <div className="mb-5 md:mb-10">
        <SectionTitle
          mainTitle="Our best Seller Dishes"
          description="Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomato, all tossed in your choice of dressing."
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-300
              ${activeCategory === category
                ? 'bg-black text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'}
            `}
          >
            {category}
          </button>
        ))}
        <button onClick={() => setShowFoodModal(true)} className="px-6 py-2 rounded-full font-medium bg-gray-800 hover:text-black transition-all duration-300 text-white border border-gray-200 hover:bg-gray-100">
          Add Food
        </button>
        <button onClick={() => setShowCategoryModal(true)} className="px-6 py-2 rounded-full font-medium bg-gray-800 hover:text-black transition-all duration-300 text-white border border-gray-200 hover:bg-gray-100">
          Add Category
        </button>
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDishes.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>

      {/* Food Modal */}
      {showFoodModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 space-y-4 relative">
            <button onClick={() => setShowFoodModal(false)} className="absolute top-2 right-3 text-xl">&times;</button>
            <h2 className="text-xl font-semibold text-center">Add New Food</h2>
            <input
              type="text"
              placeholder="Food Name"
              className="w-full border px-3 py-2 rounded"
              value={foodForm.name}
              onChange={(e) => setFoodForm({ ...foodForm, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Price"
              className="w-full border px-3 py-2 rounded"
              value={foodForm.price}
              onChange={(e) => setFoodForm({ ...foodForm, price: e.target.value })}
            />
            <input
              type="number"
              placeholder="Rating (1–5)"
              className="w-full border px-3 py-2 rounded"
              value={foodForm.rating}
              onChange={(e) => setFoodForm({ ...foodForm, rating: e.target.value })}
            />
            <select
              className="w-full border px-3 py-2 rounded"
              value={foodForm.category}
              onChange={(e) => setFoodForm({ ...foodForm, category: e.target.value })}
            >
              <option value="">Select Category</option>
              {categories.filter(cat => cat !== 'All').map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
            <button className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800" onClick={() => setShowFoodModal(false)}>
              Add Food
            </button>
          </div>
        </div>
      )}

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 space-y-4 relative">
            <button onClick={() => setShowCategoryModal(false)} className="absolute top-2 right-3 text-xl">&times;</button>
            <h2 className="text-xl font-semibold text-center">Add Category</h2>
            <input
              type="text"
              placeholder="Category Name"
              className="w-full border px-3 py-2 rounded"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800" onClick={() => setShowCategoryModal(false)}>
              Add Category
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dishes;
