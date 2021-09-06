var mongoose = require ("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

var restaurentSchema = mongoose.Schema({
    // id: { type: Number, required: true },
    name: { type: String, required: true },
    logo: { type: String, required: true },
    slogan: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    createdAt: {type: Date, default: Date.now}
})

restaurentSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

restaurentSchema.plugin(mongoosePaginate);

const restaurentModel = mongoose.model("Restaurent", restaurentSchema);

restaurentModel.paginate().then({})

module.exports = restaurentModel;