var router = require("express").Router()
const Order = require("../modals/orders")
var mongoose = require("mongoose");

router.get("/orders", function(req,res) { 
    Order.find(function (err, orders) {
        if(err) console.log(err)
        res.setHeader("Content-Range", orders.length)
        res.json(orders);
    })
})

router.get("/orders/:id", function(req,res) {
    Order.findById(mongoose.Types.ObjectId(req.params.id), function (err, order){
        if(err) console.log(err)
        res.json(order)
    })
})

router.post('/orders', function(req,res){
    var newOrder = new Order(req.body);
    console.log(newOrder)
    newOrder.save(function(err, order ){
        if (err)  console.log(err);
        res.json(order)
    })
})

router.delete("/orders/:id", function(req,res) {
    Order.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id))
    .then(data => {
        if(!data)
        res.status(404).send({message: `Cannot find order with id: ${id}`})
        else {
            res.send({ message: "Deleted order successfully"})
        }
    })
    .catch(err => {
        res.status(500).send({ message: `Error deleted order with id: ${id}` })
    })
})

router.put("/orders/:id", function(req,res) {
    var id = req.params.id
    Order.findByIdAndUpdate(mongoose.Types.ObjectId(id), req.body)
    .then(data => {
        if(!data)
        res.status(404).send({message: `Cannot find order with id: ${id}`})
        else {
            res.send({ message: "Updated order successfully"})
        }
    })
    .catch(err => {
        res.status(500).send({ message: err })
    })
})


module.exports = router;