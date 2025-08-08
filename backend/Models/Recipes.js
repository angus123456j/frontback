const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    time: { type: String, require: true },
    description: { type: String, require: true },
    ingredients: { type: [String], require: true },
    steps: { type: [String], require: true },
    imageURL: { type: String },
    tags: { type: [String], require: true },
    userId: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
