const mongoose = require('mongoose')
const { Category } = require('./category.model')
const { Item } = require('./item.model')

const IngreditentSchema = mongoose.Schema({
    item: {
        type: Item,
        required: [true, 'please start by selecting an item']
    },
    quantity: {
        type: Number,
    },
    unit: {
        type: String,
    }
})

const RecipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'recipe needs a name'],
    },
    ingredients: {
        type: [IngreditentSchema],
        required: [true, 'how you gonna have a recipe with no ingredients?']
    },
    categories: [Category],
    link: String,
    description: String,
    instructions: [String]
}, {
    timestamps: true
})

module.exports.Recipe = mongoose.model('Recipe', RecipeSchema)