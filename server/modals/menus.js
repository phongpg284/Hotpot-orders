var mongoose = require ("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

var menuSchema = mongoose.Schema({
    hotpotId: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    createdAt: {type: Date, default: Date.now}
})

menuSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

menuSchema.plugin(mongoosePaginate);

const menuModel = mongoose.model("Menus", menuSchema);

menuModel.paginate().then({})

module.exports = menuModel;