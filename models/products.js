const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: String,
  serialNumber:String,
  idNumber: String,
  img:String,
  description: String,
  price: String,
  createdby:{type: String}
})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item
