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
    IngredientOrder.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id))
    .then(data => {
        if(!data)
        res.status(404).send({message: `Cannot find ingredient order with id: ${id}`})
        else {
            res.send({ message: "Deleted ingredient order successfully"})
        }
    })
    .catch(err => {
        res.status(500).send({ message: `Error deleted ingredient order with id: ${id}` })
    })
})

router.put("/ingredientOrders/:id", function(req,res) {
    var id = req.params.id;
    IngredientOrder.findByIdAndUpdate(mongoose.Types.ObjectId(id), req.body)
    .then(data => {
        if(!data)
        res.status(404).send({message: `Cannot find ingredient order with id: ${id}`})
        else {
            res.send({ message: "Updated ingredient order successfully"})
        }
    })
    .catch(err => {
        res.status(500).send({ message: `Error updated ingredient order with id: ${id}` })
    })
})

module.exports = router;
