const express = require("express");
const screenOneController = require("../Controller/mainController");
const screenTwoController = require("../Controller/twoController");
const screenThreeController = require("../Controller/threeController");
const router = express.router();

// GET REQUEST

router.get("/book", screenOneController.getHomepage);

// POST REQUEST

router.post("/bookseat1", screenOneController.bookSeat);
router.post("/bookseat2", screenTwoController.bookSeat);
router.post("/bookseat3", screenThreeController.bookSeat);
router.post("/cancelseat1", screenOneController.cancelSeat);
router.post("/cancelseat2", screenTwoController.cancelSeat);
router.post("/cancelseat3", screenThreeController.cancelSeat);

module.exports = router;