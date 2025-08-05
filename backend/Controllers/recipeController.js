const recipeService = require('../Services/recipeService')

const addRecipe = async(req, res) => {
    console.log("addRecipe");
    try {
        const recipe = await recipeService.createRecipe(req.body)
        res.status(201).json(recipe)
    } catch (err) {
        res.status(500).json({error:'Failed to create recipe'})
    }
};

const fetchRecipes = async(req, res) => {
    console.log("fetchRecipe");

    try {
        const recipe = await recipeService.fetchRecipe()
        res.json(recipe)
    } catch (err) {
        res.status(500).json({error:'Failed to fetch recipe'})
    }
};


const obtainRecipeByID = async(req, res) => {
    console.log("getRecipebyID");

    try {
        const result = await recipeService.getRecipeByID(req.params.id)
        if (!result){
            return result.status(404).json({error: " recipe does not exist"})
        }
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({error:'Failed to get recipe by ID'})
    }
};


const deleteRecipeByID = async(req, res) => {
    console.log("deleteRecipebyID");

    try {
        const deleted = await recipeService.deleteRecipe(req.params.id)
        if (!deleted){
            return deleted.status(404).json({error: " recipe does not exist"})
        }
        res.status(200).json({message: "recipe succesfully deleted"})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};


module.exports = {
    addRecipe,
    fetchRecipes,
    obtainRecipeByID,
    deleteRecipeByID,
};


