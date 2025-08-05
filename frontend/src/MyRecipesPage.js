import React from 'react';
import { Link } from 'react-router-dom'; // New import
import Header from './components/Header';
import AddRecipeCard from './components/AddRecipeCard';
import RecipeListItem from './components/RecipeListItem';

// Import your local images
import italianBurgerImage from './assets/Stefano-Faita_Burger-italien-706x1058.jpg';
import smashBurgerImage from './assets/goldburger-smash-burger.jpg';

// Sample data to match your mockup
const sampleRecipes = [
  { 
    id: 1, 
    name: 'Italian Burger', 
    author: 'Angus L', 
    time: '25 min',
    image: italianBurgerImage
  },
  { 
    id: 2, 
    name: 'Smash Burger', 
    author: 'Angus L', 
    time: '30 min',
    image: smashBurgerImage
  },
];

function MyRecipesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Recipes I uploaded</h1>
        <p className="mt-1 text-gray-500">My community contributions:</p>
        
        <div className="mt-8 space-y-4">
          <Link to="/add-recipe">
            <AddRecipeCard />
          </Link>
          {sampleRecipes.map(recipe => (
            <RecipeListItem key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default MyRecipesPage;