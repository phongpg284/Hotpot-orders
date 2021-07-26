var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ingredient: {type: String, require: true}, 
    quantity: {type: Number, require: true},
})

module.exports = mongoose.model("items",itemSchema);