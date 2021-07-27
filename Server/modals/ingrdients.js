var mongoose = require("mongoose");

var ingredientSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {type: String, require: true}, 
    quantity: {type: Number, require: true},
})

module.exports = mongoose.model("Ingredients", ingredientSchema);