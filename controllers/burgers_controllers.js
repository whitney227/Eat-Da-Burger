//import Express and burger.js
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//Create routes
router.get("/", function(req, res) {
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index", {burger_data});
    });
});


router.post("/burgers/create", function(req,res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    });
});

//Export
module.exports = router;