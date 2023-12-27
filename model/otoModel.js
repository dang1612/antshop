var mongoose = require('mongoose')
var otoModel = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    video: String,
    color: String
})
var otoModel = mongoose.model("oto", otoModel, "oto");
module.exports = otoModel;