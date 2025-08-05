import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // New import
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import logo from './assets/logo.png';
import search from './assets/search.png';
import './HomePage.css';
import ribImage from './assets/rib.jpg';
import tofuImage from './assets/tofu.jpg';
import friedChickenImage from './assets/friedChicken.jpg';
import tacoImage from './assets/taco.jpg';
import yumImage from './assets/yum.jpg';
import porkChopImage from './assets/Pork-Chops-with-Apples-and-Bacon-FT-MAG-RECIPE-0924-83dcd0b759534fbbbc8fdf86b706f1f8.jpg';
import chickenKatsuImage from './assets/easy-chicken-katsu-curry5.jpg';
import coconutChickenImage from './assets/coconut-chicken-curry-1-11.jpg';
import phillyImage from './assets/Philly-cheesesteak-fbc53c6.jpg';
import honeyGarlicChickenImage from './assets/30-Minute-Honey-Garlic-Chicken-1.jpg';
import { getAllRecipes } from './api/recipeAPI';


const sampleRecipes = [
  { id: 1, name: 'Prime Ribs', image: ribImage },
  { id: 2, name: 'Creamy Tofu', image: tofuImage },
  { id: 3, name: 'Lemon Fried Chicken', image: friedChickenImage },
  { id: 4, name: 'Taco', image: tacoImage },
  { id: 5, name: 'Yum', image: yumImage },
  { id: 6, name: 'Apple Pork Chops', image: porkChopImage },
  { id: 7, name: 'Chicken Katsu Curry', image: chickenKatsuImage },
  { id: 8, name: 'Apple Pork Chops', image: coconutChickenImage },
  { id: 9, name: 'Apple Pork Chops', image: phillyImage },
  { id: 10, name: 'Honey Garlic Chicken', image: honeyGarlicChickenImage },

];


function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    const fetchRecipes = async() => {
      try{
        const data = await getAllRecipes();
        setRecipes(data);
      }catch (err) {
        console.log(err)
      }
    };
    fetchRecipes();
  },[])

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search-results?q=${searchQuery}`);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div>{console.log(recipes)}</div>
      <main className="p-0">
        <div className="container mx-auto p-8 text-center">
          {/* Main Title and Search Section */}
          <div className="mt-12 mb-4">
            <div className="flex items-center space-x-4 w-fit mx-auto">
              <img src={logo} alt="Every Recipe Logo" className="h-12" />
              <h2 className="text-5xl font-extrabold text-green-700">Every_Recipe</h2>
            </div>
          </div>

          {/* Search Bar Section */}
          <form onSubmit={handleSearch} className="relative mb-4 max-w-lg mx-auto"> {/* Converted to a form */}
            <input
              type="text"
              placeholder="Search up recipes"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={search} alt="magnifying glass logo" className="h-4" />
            </span>
          </form>
        </div>

        {/* Recipe Grid (Moving Bands) */}
        <div className="space-y-4">
          {/* First Moving Band (Row) */}
          <div className="scroll-container">
            <div className="scroll-content scroll-animation-left gap-x-4">
              {sampleRecipes.map(recipe => (<RecipeCard key={recipe.id} recipe={recipe} />))}
              {sampleRecipes.map(recipe => (<RecipeCard key={recipe.id} recipe={recipe} />))}
            </div>
          </div>

          {/* Second Moving Band (Row) */}
          <div className="scroll-container mr-0 md:mr-12">
            <div className="scroll-content scroll-animation-right gap-x-4">
              {sampleRecipes.map(recipe => (<RecipeCard key={recipe.id} recipe={recipe} />))}
              {sampleRecipes.map(recipe => (<RecipeCard key={recipe.id} recipe={recipe} />))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;