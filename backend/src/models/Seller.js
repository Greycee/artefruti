const mongoose = require('mongoose')

const SellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  code: { type: Number, required: true },
  whatsapp: { type: Number, required: true },
  city: { type: String, required: true },
  uf: { type: String, max: 2, required: true },
  categories: [String],
})

module.exports = mongoose.model('Seller', SellerSchema)
