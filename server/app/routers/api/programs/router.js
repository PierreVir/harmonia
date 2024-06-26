const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const { browse, read } = require("../../../controllers/programActions");

router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
// router.post("/", add);

/* ************************************************************************* */

module.exports = router;
