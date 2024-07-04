const express = require("express");
const router = express.Router();
//Requires das interfaces
const dado = require("./services/dado");


router.get("/dado", dado);


module.exports = router;