var router = require("express").Router()
const Ingredient = require("../modals/ingrdients")
var mongoose = require("mongoose");
router.get("/ingredients", function(req,res) {
    Ingredient.find(function (err, ingredients) {
        if(err)
        console.log(err);
        res.setHeader("Content-Range", ingredients.length)
        res.json(ingredients);
    })
})

router.get("/ingredients/:id", function(req,res) {
    
    Ingredient.findOne({id: req.params.id}, function (err, ingredients) {
        if(err)
        console.log(err);
        res.json(ingredients);
    })
})

router.post("/ingredients", function (req, res) {
    console.log(req.body)
    var ingredients = new Ingredient(req.body);
    ingredients.save(function (err, ingredients) {
        if (err)
        console.log(err)
        res.json(ingredients)
    })
})

router.delete("/ingredients/:id", function(req,res) {
    Ingredient.findOneAndDelete({id: req.params.id}, function (err, ingredient){
        if(err) console.log(err)
        res.json(ingredient)
    })
})

module.exports = router;
