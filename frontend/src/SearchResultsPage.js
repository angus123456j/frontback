// src/SearchResultsPage.js

import React from 'react';
import Header from './components/Header';
import SearchCard from './components/SearchCard';
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

// Sample data to fill the search results page

const sampleSearchResults = [
  { id: 1, title: 'Honey Garlic Chicken', author: 'Angus L', time: '60 min', image: honeyGarlicChickenImage },
  { id: 2, title: 'Creamy Tofu', author: 'Angus L', time: '60 min', image: tofuImage },
  { id: 3, title: 'Lemon Fried Chicken', author: 'Angus L', time: '60 min', image: friedChickenImage },
  { id: 4, title: 'Apple Pork Chops', author: 'Angus L', time: '60 min', image: porkChopImage },
  { id: 5, title: 'Taco', author: 'Angus L', time: '60 min', image: tacoImage },
  { id: 6, title: 'Yum', author: 'Angus L', time: '60 min', image: yumImage },
  { id: 7, title: 'Chicken Katsu Curry', author: 'Angus L', time: '60 min', image: chickenKatsuImage },
  { id: 8, title: 'Coconut Chicken Curry', author: 'Angus L', time: '60 min', image: coconutChickenImage },
  { id: 9, title: 'Philly Cheese Steak', author: 'Angus L', time: '60 min', image: phillyImage },
  { id: 10, title: 'Prime Ribs', author: 'Angus L', time: '60 min', image: ribImage },
];

function SearchResultsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Search Results</h1>
        <p className="mt-2 text-gray-500">Search Result: Chicken</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {sampleSearchResults.map(recipe => (
            <SearchCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResultsPage;