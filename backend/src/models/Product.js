const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    image: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    value: { type: Number, required: true },
    type: { type: String, required: true },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
)

ProductSchema.virtual('image_url').get(function () {
  return `http://localhost:3333/files/${this.image}`
})

module.exports = mongoose.model('Product', ProductSchema)
