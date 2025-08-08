const Joi = require("joi");

const createRecipeSchema = Joi.object({
  // "egg123"  123
  title: Joi.string().required(),
  time: Joi.string().required(),
  description: Joi.string().required(),

  ingredients: Joi.array().items(Joi.string()).required(),
  steps: Joi.array().items(Joi.string()).required(),
  imageURL: Joi.string().uri(),
  tags: Joi.array().items(Joi.string()),
  userId: Joi.string().required(),
});

module.exports = createRecipeSchema;
