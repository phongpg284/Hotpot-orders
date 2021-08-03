var mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

var orderSchema = new mongoose.Schema({
    userId: {type: Number, required:true},
    guestQty: {type: Number, require: true},
    tableId: {type: Number, require: true},
    priceType: {type: Number, require: true},
    hotpotType: {type: String, require: true},
    createdAt: {type: Date, default: Date.now}
})

orderSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

orderSchema.plugin(mongoosePaginate);

const orderModel = mongoose.model('Orders', orderSchema);

orderModel.paginate().then({}); // Usage

module.exports = orderModel;