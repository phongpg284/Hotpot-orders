var mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

var hotpotSchema = new mongoose.Schema({
    name: {type: String, require: true},
    ingredients: [{
        id: Number,
        name: String,
    }], 
    imgUrl: String
})

hotpotSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

hotpotSchema.plugin(mongoosePaginate);

const hotpotModel = mongoose.model('Hotpots', hotpotSchema);

hotpotModel.paginate().then({});

module.exports = hotpotModel;
