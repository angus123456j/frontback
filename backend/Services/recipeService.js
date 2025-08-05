const Recipe = require('../Models/Recipes')

// Add new recipe
const createRecipe = async (data) => {
    const newRecipe = new Recipe(data)
    return await newRecipe.save();
};

//Fetch all recipes
const fetchRecipe = async () => {
    return await Recipe.find();
};

const getRecipeByID = async(id) =>  {
    return await Recipe.findById(id);
};

const deleteRecipe = async(id) =>{
    return await Recipe.findByIdAndDelete(id);
};


module.exports = {
    createRecipe,
    fetchRecipe,
    getRecipeByID,
    deleteRecipe,
};