const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  serialNumber:String,
  idNumber: String,
  img:String,
  description: String,
  price: String,
})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item
