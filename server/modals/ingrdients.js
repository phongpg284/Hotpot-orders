var mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

var ingredientSchema = new mongoose.Schema({
    id: {type: Number, require: true},
    name: {type: String, require: true}, 
    quantity: {type: Number, require: true},
})

// ingredientSchema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
// });

ingredientSchema.plugin(mongoosePaginate);

const ingredientModel = mongoose.model('Ingredients', ingredientSchema);

ingredientModel.paginate().then({}); // Usage

module.exports = ingredientModel;

