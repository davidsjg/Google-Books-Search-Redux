const router = require("express").Router();
const bookController = require("../../controller/bookController");

//  matches with "api/books"
router.route("/").get(bookController.findAll);

//  matches with "api/books/book"
router.route("/book").get(bookController.findBook);

//  mathces with "api/books/:book"
// router.route("/:book").get(bookController.findBook);

module.exports = router;
