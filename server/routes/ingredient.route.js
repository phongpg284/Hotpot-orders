var router = require("express").Router()
const Ingredient = require("../modals/ingrdients")
var mongoose = require("mongoose");
router.get("/ingredients", function(req,res) {
    Ingredient.find(function (err, ingredients) {
        if(err)
        console.log(err);
        res.json(ingredients);
    })
})

router.get("/ingredients/:id", function(req,res) {
    
    Ingredient.findById(mongoose.Types.ObjectId(req.params.id), function (err, item) {
        if(err)
        console.log(err);
        res.json(item);
    })
})

router.post("/ingredients", function (req, res) {
    var ingredients = new Ingredient({
        ...req.body,
        id: new mongoose.Types.ObjectId()
    });
    ingredients.save(function (err, ingredients) {
        if (err)
        console.log(err)
        res.json(ingredients)
    })
})

router.delete("/ingredients/:id", function(req,res) {
    Ingredient.findOneAndDelete({id: mongoose.Types.ObjectId(req.params.id)}, function (err, ingredient){
        if(err) console.log(err)
        res.json(ingredient)
    })
})

module.exports = router;
