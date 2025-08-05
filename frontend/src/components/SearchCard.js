import React from 'react';
import { Link } from 'react-router-dom';

function SearchCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="block">
      <div
        className="relative flex items-center gap-4 rounded-lg p-4 bg-white shadow-sm transition-transform hover:scale-105 hover:z-10 cursor-pointer"
      >
        <div className="flex-grow">
          <h3 className="text-xl font-bold">{recipe.title}</h3>
          <p className="text-gray-500">Recipe by: {recipe.author}</p>
          <p className="text-gray-500">Time: {recipe.time}</p>
        </div>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-24 h-24 object-cover rounded-md flex-shrink-0"
        />
      </div>
    </Link>
  );
}

export default SearchCard;