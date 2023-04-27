const { Category } = require('../models/planning/category.model')
const { Item } = require('../models/planning/item.model')
const { Recipe } = require('../models/planning/recipe.model')

module.exports.createItem = (req, res) => {
  Item.create(req.body)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json(err))
}

module.exports.createCategory = (req, res) => {
  Category.create(req.body)
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err))
}

module.exports.createRecipe = (req, res) => {
  Recipe.create(req.body)
    .then((recipe) => res.json(recipe))
    .catch((err) => res.status(400).json(err))
}

module.exports.getAll = (req, res) => {
  const all = {}
  Category.find()
    .then((categories) => {
      all.categories = categories
    })
    .catch((err) => res.status(400).json(err))
  Recipe.find()
    .then((recipes) => {
      all.recipes = recipes
    })
    .catch((err) => res.status(400).json(err))
  Item.find()
    .then((items) => {
      all.items = items
    })
    .catch((err) => res.json(err))
  res.json(all)
}
