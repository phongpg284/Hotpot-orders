var mongoose = require('mongoose')
var orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {type: Number, required:true},
    guestQty: {type: Number, require: true},
    tableId: {type: Number, require: true},
    priceType: {type: Number, require: true},
    hotpotType: {type: String, require: true},
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('order', orderSchema);