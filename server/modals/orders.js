var mongoose = require('mongoose')
var orderSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userId: {type: Number, required:true},
    guestQty: {type: Number, require: true},
    tableId: {type: Number, require: true},
    priceType: {type: Number, require: true},
    hotpotType: {type: String, require: true},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Orders', orderSchema);