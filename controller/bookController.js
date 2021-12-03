const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findBook: function (req, res) {
    console.log(req.query);
    db.Book.find({
      title: { $regex: new RegExp(req.query.q, "i") },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
