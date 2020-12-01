const Product = require("../models/Product");

module.exports = {
  async index(req, res) {
    const { seller_id } = req.headers;

    const products = await Product.find({ seller: seller_id });

    res.json(products);
  }
};
