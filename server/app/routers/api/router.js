const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const { SaySomething } = require("../../controllers/sayActions");

const { browse } = require("../../controllers/programActions");

router.get("/", SaySomething);

router.get("/programs", browse);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
