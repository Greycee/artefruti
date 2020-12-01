const Seller = require("../models/Seller");

module.exports = {
  async create(req, res) {
    const { email } = req.body;

    const seller = await Seller.find({ email });

    if (!seller) {
      return res.status(400).json({ error: "no seller found with this ID" });
    }

    return res.json({ name: seller[0].name, id: seller[0]._id });
  }
};
