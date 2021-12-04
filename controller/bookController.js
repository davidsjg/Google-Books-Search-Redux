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
    let tempReg = new RegExp(req.query.q, "i");
    console.log(tempArr);

    db.Book.aggregate([
      {
        $project: {
          new_title: {
            $split: ["$title", " "],
          },
          qty: 1,
        },
      },
      {
        $unwind: {
          path: "$new_title",
        },
      },
      {
        $match: {
          new_title: "of",
        },
      },
    ])

      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
    // db.Book.find({title: { $regex: new RegExp(req.query.q, "i") },)}
    //   // .aggregate([
    //   //   { $project: { _id: 0, title: 1 } },
    //   //   { $split: [title, " "] },
    //   // ])

    //   // .find({ title: { $in: ["of"] } })

    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
  },
};
// title: { $regex: new RegExp(req.query.q, "i") },

// { $split: [title, " "] }

// .find({
//   $all: tempArr,
// })

// db.Book.find({
//   //                    "i" specifies case-insensitive match
//   // title.splice(' '): tempArr,
//   { $split: [ title, ' ' ] }

//   title: { $regex: new RegExp(req.query.q, "i") },
// })

// .find(
//   //                    "i" specifies case-insensitive match
//   // title.splice(' '): tempArr,

// {
//   title: {
//     $in: ["of"],
//   },
// }
// )

// db.inventory
//   .find({ qty: { $in: [5, 15] } })
