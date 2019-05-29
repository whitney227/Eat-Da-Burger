//import Express and burger.js
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//Create routes
router.get("/", function(req, res) {
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index", {burger_data});
    })
});


router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id : result.insertId });
    });
});

router.put("api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Export
module.exports = router;