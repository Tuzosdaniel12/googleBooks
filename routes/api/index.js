const router = require("express").Router();
const bookRoutes = require("./books.js");

// Post routes
router.use("/books", bookRoutes);

module.exports = router;
