import React, { useState, useEffect, useContext, useRef} from 'react';
import { useNavigate } from 'react-router-dom'; // New import
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import logo from './assets/logo.png';
import search from './assets/search.png';
import './HomePage.css';
import { allTags } from './tagsDta';


import TagPill from './components/TagPill'; // Import TagPill




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
import { RecipeContext } from './context/RecipeContext';




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
 const { recipes, setFilteredRecipes } = useContext(RecipeContext)
 const [searchQuery, setSearchQuery] = useState(''); // New state for search query
 const navigate = useNavigate(); // Hook for programmatic navigation
 const [isSearchFocused, setIsSearchFocused] = useState(false);

 const [selectedTags, setSelectedTags] = useState([]);
 // Create a ref to hold a reference to the search container
const searchRef = useRef(null);

 

 useEffect(() => {
    function handleClickOutside(event) {
      // If the user clicks outside the search container, set focus to false
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    }
    
    // Add the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);
    
    // Cleanup: remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

 const handleTagClick = (tag) => {
  // Prevent the default form submission behavior
  //e.preventDefault();
  // Stop the event from bubbling up to the parent form
  //e.stopPropagation();

  // Check if the tag is already in the array
  if (selectedTags.includes(tag)) {
    // If it is, remove it (un-select)
    setSelectedTags(selectedTags.filter(t => t !== tag));
  } else {
    // If it's not, add it (select)
    setSelectedTags([...selectedTags, tag]);
  }
};
const handleSearch = (e) => {
  e.preventDefault();

  const lowercasedSearchQuery = searchQuery.toLowerCase();
  const hasSearchQuery = lowercasedSearchQuery.trim() !== '';
  const hasSelectedTags = selectedTags.length > 0;

  let filtered = [];

  // Scenario 1: Filter by BOTH name AND tags
  if (hasSearchQuery && hasSelectedTags) {
    filtered = recipes.filter(recipe => {
      const searchMatches = recipe.title.toLowerCase().includes(lowercasedSearchQuery) ||
                            (Array.isArray(recipe.tags) && recipe.tags.some(tag => tag.toLowerCase().includes(lowercasedSearchQuery)));
      const tagsMatch = Array.isArray(recipe.tags) && selectedTags.every(selectedTag => recipe.tags.includes(selectedTag));
      return searchMatches && tagsMatch;
    });
  }
  // Scenario 2: Filter by NAME ONLY
  else if (hasSearchQuery) {
    filtered = recipes.filter(recipe => {
      return recipe.title.toLowerCase().includes(lowercasedSearchQuery) ||
             (Array.isArray(recipe.tags) && recipe.tags.some(tag => tag.toLowerCase().includes(lowercasedSearchQuery)));
    });
  }
  // Scenario 3: Filter by TAGS ONLY
  else if (hasSelectedTags) {
    filtered = recipes.filter(recipe => {
      return Array.isArray(recipe.tags) && selectedTags.every(selectedTag => recipe.tags.includes(selectedTag));
    });
  }
  // Scenario 4: No filters, show all recipes
  else {
    filtered = recipes;
  }

  setFilteredRecipes(filtered);
  
  if (hasSearchQuery || hasSelectedTags) {
    navigate(`/search-results?q=${searchQuery}`);
  }
};



 

return (
  <div className="bg-gray-50 min-h-screen">
    {/* Header at the top */}
    <Header />

    <main className="p-0">
      {/* Container for logo and search bar */}
      <div className="container mx-auto p-8 text-center">
        <div className="mt-12 mb-10">
          {/* Logo + Search bar with animation */}
          <div className={`search-animation-container ${isSearchFocused ? 'focused' : ''}`}
            ref={searchRef}>
            {/* Logo Section */}
            <div className="flex items-center space-x-4 logo-section mb-5">
              <img src={logo} alt="Every Recipe Logo" className="h-12" />
              <h2 className="text-5xl font-extrabold text-green-700">Every_Recipe</h2>
            </div>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="relative search-form"
              onClick={() => setIsSearchFocused(true)} 
            
             
            >
              <input
                type="text"
                placeholder="Search up recipes"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full
                  focus:outline-none focus:border-green-500
                  hover:outline outline-1 outline-green-500 hover:outline-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

             {/* Place the filter section HERE, inside the form */}
              {isSearchFocused && (
                <div className="filter-tags-section">
                  <p className="filter-tags-title">Filter by tags</p>
                  <div className="filter-tags-line"></div>
                  
                  {/* --- Correct placement: the tags are now inside this div --- */}
                  {Object.entries(allTags).map(([category, tags]) => (
                    <div key={category} className="tags-category">
                      <h4 className="tags-category-title">{category}</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map(tag => (
                       

                        <TagPill
                          key={tag}
                          tag={tag}
                          // Pass a new function that handles the event and then calls the main handler
                          onSelect={handleTagClick}
                          isSelected={selectedTags.includes(tag)}
                        />
                          
                        ))}


                      </div>
                    </div>
                  ))}
                  {/* --- All of the above is now inside the conditional block --- */}
                </div>
              )}


              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-grey-400">
                <img src={search} alt="magnifying glass logo" className="h-4" />
              </span>
            </form>

          </div>
        </div>
      </div>

      {/* Horizontal scroll sections for recipe cards */}
      <div className="space-y-4">
        {/* First scroll row (left animation) */}
        <div className="scroll-container">
          <div className="scroll-content scroll-animation-left gap-x-4">
            {sampleRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            {sampleRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>

        {/* Second scroll row (right animation) */}
        <div className="scroll-container mr-0 md:mr-12">
          <div className="scroll-content scroll-animation-right gap-x-4">
            {sampleRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            {sampleRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </main>
  </div>
);
}
export default HomePage;