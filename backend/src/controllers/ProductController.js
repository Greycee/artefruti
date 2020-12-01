const Product = require('../models/Product')
const Seller = require('../models/Seller')

module.exports = {
  async index(_, res) {
    const products = await Product.find()
    return res.json(products)
  },

  async create(req, res) {
    const { filename } = req.file
    const { title, description, value, type } = req.body
    const { seller_id } = req.headers

    const seller = await Seller.findById(seller_id)

    if (!seller) {
      res.status(404).json({ error: 'User does not exist' })
    }

    const product = await Product.create({
      image: filename,
      title,
      description,
      value,
      type,
      seller: seller_id,
    })

    await product.populate('seller').execPopulate()

    return res.json(product)
  },

  async delete(req, res) {
    const { id } = req.params
    const { seller_id } = req.headers

    const product = await Product.findById({ _id: id })

    if (!product) {
      return res.status(401).json({ error: 'Operation not permitted' })
    }

    const deleteProduct = await Product.findOneAndDelete({ _id: id })
    return res.json(deleteProduct)
  },

  async put(req, res) {
    const { id } = req.params
    const { filename } = req.file
    const { title, description, value, type } = req.body

    const product = await Product.findById({ _id: id })

    if (!product) {
      return res.status(401).json({ error: 'Operation not permitted' })
    }

    const editProduct = await Product.findOneAndUpdate(
      { _id: id },
      { image: filename, title, description, value, type },
      { new: true },
    )
    return res.json(editProduct)
  },
}
