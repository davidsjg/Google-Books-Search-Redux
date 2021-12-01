const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

//api routes
router.use("/api", apiRoutes);

//if no API routes hit, send react app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
