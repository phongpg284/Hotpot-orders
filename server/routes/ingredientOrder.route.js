var router = require("express").Router()
const IngredientOrder = require("../modals/ingredientOrders")
var mongoose = require("mongoose");
router.get("/ingredientOrders", function(req,res) {
    IngredientOrder.find(function (err, ingredientOrders) {
        if(err)
        console.log(err);
        res.setHeader("Content-Range", ingredientOrders.length)
        res.json(ingredientOrders);
    })
})

router.get("/ingredientOrders/:id", function(req,res) {
    IngredientOrder.findById(mongoose.Types.ObjectId(req.params.id), function (err, ingredientOrder) {
        if(err)
        console.log(err);
        res.json(ingredientOrder);
    })
})

router.post("/ingredientOrders", function (req, res) {
    var ingredientOrder = new IngredientOrder(req.body);
    ingredientOrder.save(function (err, ingredientOrder) {
        if (err)
        console.log(err)
        res.json(ingredientOrder)
    })
})

router.delete("/ingredientOrders/:id", function(req,res) {
    IngredientOrder.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id), function (err, ingredientOrder){
        if(err) console.log(err)
        res.json(ingredientOrder)
    })
})

module.exports = router;
