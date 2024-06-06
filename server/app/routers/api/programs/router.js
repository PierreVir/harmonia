const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const {
  browse: programs,
  read,
  add,
} = require("../../../controllers/programActions");

router.get("/", programs);

// Route to get a specific item by ID
router.get("/programs/:id", read);

// Route to add a new item
router.post("/programs", add);

/* ************************************************************************* */

module.exports = router;
