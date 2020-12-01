const Seller = require('../models/Seller')

module.exports = {
  async index(_, res) {
    const sellers = await Seller.find()
    return res.json(sellers)
  },

  async create(req, res) {
    const {
      name,
      lastName,
      email,
      code,
      whatsapp,
      city,
      uf,
      categories,
    } = req.body

    const seller = await Seller.create({
      name,
      lastName,
      email,
      code,
      whatsapp,
      city,
      uf,
      categories: categories.split(',').map((category) => category.trim()),
    })

    return res.json(seller)
  },
}
