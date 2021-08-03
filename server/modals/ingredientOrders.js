var mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

var ingredientOrderSchema = new mongoose.Schema({
    userId: {type: String, require: true},
    tableId: {type: Number, require: true},
    ingredient: {type: String, require: true}, 
    quantity: {type: Number, require: true},
    createdAt: {type: Date, default: Date.now}
})

ingredientOrderSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

ingredientOrderSchema.plugin(mongoosePaginate);

const ingredientOrderModel = mongoose.model('IngredientOrders', ingredientOrderSchema);

ingredientOrderModel.paginate().then({}); // Usage

module.exports = ingredientOrderModel;
