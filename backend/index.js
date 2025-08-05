require('dotenv').config();
const express = require('express');
const cors = require('cors');


const connectDB = require('./Config/db');
const app = express();
const recipeController = require('./Controllers/recipeController');
const validate = require('./middleware/validate');
const createRecipeSchema = require('./middleware/recipeValidator');
app.use(cors());
app.use(express.json());

//DB connections
connectDB();

//Routes (http://localhost:2356/recipes)
app.post('/recipes', validate(createRecipeSchema), recipeController.addRecipe);
app.get('/recipes', recipeController.fetchRecipes);

app.delete('/recipes/:id', recipeController.deleteRecipeByID);
app.get('/recipes/:id', recipeController.obtainRecipeByID);

//Start server
app.listen(process.env.PORT, () => console.log("Server running on port 2356"));

// Server -> Controller -> Services -> Model