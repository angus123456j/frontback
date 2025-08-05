import React, { useState, useEffect} from 'react';
import { getAllRecipes } from './api/recipeAPI';

import { useParams } from 'react-router-dom';
import Header from './components/Header';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import tofuImage from './assets/tofu.jpg';
import honeyGarlicChickenImage from './assets/30-Minute-Honey-Garlic-Chicken-1.jpg';
import TagPill from './components/TagPill';

/*const allRecipes = [
  {
    id: '1',
    title: 'Honey Garlic Chicken',
    author: 'Angus L',
    time: '40 min',
    image: honeyGarlicChickenImage,
    description: 'A delicious and easy-to-make honey garlic chicken dish that is perfect for a quick weeknight dinner.',
    ingredients: ['1 lb chicken', '1/4 cup honey', '2 tbsp soy sauce', '2 cloves garlic', '1 tbsp olive oil'],
    steps: [
      "1. Rinse and cook rice with a pinch of salt (1 cup rice to 2 cups water).",
      "2. Season chicken with salt and pepper.",
      "3. Mix honey, soy sauce, vinegar, garlic, and optional ginger/chili flakes in a bowl.",
      "4. Sear chicken in olive oil over medium heat until fully cooked (about 165°F / 74°C).",
      " Rinse and cook rice with a pinch of salt (1 cup rice to 2 cups water). 2. Season chicken with salt and pepper. 3. Mix honey, soy sauce, vinegar, garlic, and optional ginger/chili flakes in a bowl. Sear chicken in olive oil over medium heat until fully cooked (about 165°F / 74°C).",
    " Rinse and cook rice with a pinch of salt (1 cup rice to 2 cups water). 2. Season chicken with salt and pepper. 3. Mix honey, soy sauce, vinegar, garlic, and optional ginger/chili flakes in a bowl. Sear chicken in olive oil over medium heat until fully cooked (about 165°F / 74°C).",
    " Rinse and cook rice with a pinch of salt (1 cup rice to 2 cups water). 2. Season chicken with salt and pepper. 3. Mix honey, soy sauce, vinegar, garlic, and optional ginger/chili flakes in a bowl. Sear chicken in olive oil over medium heat until fully cooked (about 165°F / 74°C).",
    ],
    tags: ['dinner', 'easy', 'sweet'],
  },
  {
    id: '2',
    title: 'Creamy Tofu',
    author: 'Angus L',
    time: '30 min',
    image: tofuImage,
    description: 'A simple, creamy tofu dish with a rich and savory flavor. Great for a light and healthy meal.',
    ingredients: ['1 block tofu', '1/2 cup cream', '1/4 cup vegetable broth', 'spices'],
    steps: ['1. Press and cube tofu.', '2. Sauté until golden brown.', '3. Add cream and broth, simmer.', '4. Season and serve.'],
    tags: ['vegan', 'vegetarian', 'dinner'],
  },
];*/


function RecipePage() {
  const { id } = useParams();
  //const recipe = allRecipes.find(r => r.id === id);
  const [isSaved, setIsSaved] = useState(false);
  const [recipes, setRecipes] = useState([]);


  const toggleSave = () => {
    setIsSaved(!isSaved);
    console.log(`Recipe ${recipes._id} saved: ${!isSaved}`);
  };




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

  if (!recipes) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <div className="container mx-auto p-8 text-center">
          <h1 className="text-4xl font-bold text-red-600">404 - Recipe Not Found</h1>
          <p className="mt-4">The recipe you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          {/* Main Content */}
          <div>
            {/* Image floated to the right */}
            <div className="float-right ml-8 mb-8 w-1/2">
              <div className="aspect-w-16 aspect-h-15 rounded-lg overflow-hidden shadow-lg">
                {/*<img
                  src={recipes.image}
                  alt={recipes.title}
                  className="w-full h-full object-cover"
                />*/}
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-2">{recipes.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-gray-600 font-semibold">{/*recipe.author*/} | {recipes.time}</p>
              <button
                onClick={toggleSave}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none"
              >
                {isSaved ? (
                  <HeartSolidIcon className="h-5 w-5 text-red-500" />
                ) : (
                  <HeartOutlineIcon className="h-5 w-5 text-gray-500 hover:text-red-500" />
                )}
                <span className="font-semibold text-gray-700">Save</span>
              </button>
            </div>
            
            {recipes.tags && recipes.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 -mt-3 mb-6">
                {recipes.tags.map(tag => (
                  <TagPill key={tag} tag={tag} isSelected={true} onSelect={() => {}} />
                ))}
              </div>
            )}

            <h2 className="text-2xl font-bold mb-2">Description</h2>
            <p className="text-gray-700 mb-6">{/*recipe.description*/}</p>

            <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-6">
              {/* {recipes.ingredients.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))} */}
            </ul>

            <h2 className="text-2xl font-bold mb-2">Steps</h2>
            <ol className="list-decimal list-inside space-y-2">
              {/* {recipes.steps.map((step, index) => (
                <li key={index} className="text-gray-700">{step}</li>
              ))} */}
            </ol>
            
            {/* Clear the float */}
            <div className="clear-both"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;