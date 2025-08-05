import React from 'react';
import Header from './components/Header';
import coconutChickenImage from './assets/coconut-chicken-curry-1-11.jpg';
import phillyImage from './assets/Philly-cheesesteak-fbc53c6.jpg';
import honeyGarlicChickenImage from './assets/30-Minute-Honey-Garlic-Chicken-1.jpg';

const savedRecipes = [
  {
    id: 1,
    title: "Honey Garlic Chicken",
    author: "Alfred J",
    time: "40 min",
    image: honeyGarlicChickenImage
  },
  {
    id: 2,
    title: "Coconut Chicken Curry",
    author: "Alfred J",
    time: "30 min",
    image: coconutChickenImage
  },
  {
    id: 3,
    title: "Philly Cheese Steak",
    author: "Alfred J",
    time: "45 min",
    image: phillyImage
  }
];

function SavedRecipesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-2">Saved Recipes</h1>
        <p className="mb-6 text-gray-600">My personal collection:</p>
        <div className="space-y-4">
          {savedRecipes.map(recipe => (
            <div
              key={recipe.id}
              className="relative flex items-center gap-4 border rounded-lg p-4 bg-white shadow-sm transition-transform hover:scale-105 hover:z-10 cursor-pointer"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-500">Recipe by: {recipe.author}</p>
                <p className="text-gray-500">Time: {recipe.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SavedRecipesPage;