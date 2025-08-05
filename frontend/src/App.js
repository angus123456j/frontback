import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MyRecipesPage from './MyRecipesPage';
import AddRecipePage from './AddRecipePage';
import SearchResultsPage from './SearchResultsPage';
import RecipePage from './RecipePage';
import SavedRecipesPage from './SavedRecipesPage'; // New import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-recipes" element={<MyRecipesPage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/saved-recipes" element={<SavedRecipesPage />} /> {/* New route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;