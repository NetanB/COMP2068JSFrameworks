const express = require("express");
const router = express.Router();

// GET users listing. 
router.get("/", (req, res, next) =>{
    res.render("airlines/index", {title: "Airlines" });
});

module.exports = router;
