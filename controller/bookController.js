const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findBook: function (req, res) {
    let searchedBook = req.query.q;
    let tempArr = searchedBook.split(" ");
    console.log(tempArr);
    db.Book.aggregate([{ $project: { _id: 0, title: 1 } }])
      // db.Book.find({
      //   //                    "i" specifies case-insensitive match
      //   // title.splice(' '): tempArr,
      //   { $split: [ title, ' ' ] }

      //   title: { $regex: new RegExp(req.query.q, "i") },
      // })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};

// title: { $regex: new RegExp(req.query.q, "i") },
