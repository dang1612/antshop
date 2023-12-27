var mongoose = require('mongoose')
var otoModel = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    video: String,
    color: String
})
var otoModel = mongoose.model("bupbe", otoModel, "bupbe");
module.exports = otoModel;