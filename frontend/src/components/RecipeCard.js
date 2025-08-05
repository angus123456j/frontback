import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default RecipeCard;
