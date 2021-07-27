var mongoose = require("mongoose");

var hotpotSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {type: String, require: true},
    ingredients: [{
            id: Number,
            name: String,
        }], 
})

module.exports = mongoose.model("Hotpots", hotpotSchema);