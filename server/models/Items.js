const mongoose = require('mongoose')

const ItemsSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        required: false
    }
})

const Items =  mongoose.model('updateitems', ItemsSchema)

module.exports = Items
