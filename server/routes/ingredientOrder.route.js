var router = require("express").Router()
const IngredientOrder = require("../modals/ingredientOrders")
var mongoose = require("mongoose");
router.get("/ingredientOrder", function(req,res) {
    IngredientOrder.find(function (err, ingredientOrders) {
        if(err)
        console.log(err);
        res.json(ingredientOrders);
    })
})

router.get("/ingredientOrder/:id", function(req,res) {
    IngredientOrder.findById(mongoose.Types.ObjectId(req.params.id), function (err, ingredientOrder) {
        if(err)
        console.log(err);
        res.json(ingredientOrder);
    })
})

router.post("/ingredientOrder", function (req, res) {
    var ingredientOrder = new IngredientOrder({
        ...req.body,
        id: new mongoose.Types.ObjectId()
    });
    ingredientOrder.save(function (err, ingredientOrder) {
        if (err)
        console.log(err)
        res.json(ingredientOrder)
    })
})

router.delete("/ingredientOrder/:id", function(req,res) {
    IngredientOrder.findOneAndDelete({id: mongoose.Types.ObjectId(req.params.id)}, function (err, ingredientOrder){
        if(err) console.log(err)
        res.json(ingredientOrder)
    })
})

module.exports = router;
