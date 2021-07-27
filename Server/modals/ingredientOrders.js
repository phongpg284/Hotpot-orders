var mongoose = require("mongoose");

var ingredientOrderSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userId: {type: String, require: true},
    ingredient: {type: String, require: true}, 
    quantity: {type: Number, require: true},
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model("IngredientOrders", ingredientOrderSchema);