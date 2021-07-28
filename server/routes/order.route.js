var router = require("express").Router()
const Order = require("../modals/orders")
var mongoose = require("mongoose");
router.get("/orders", function(req,res) { 
    Order.find(function (err, order) {
        if(err) console.log(err)
        res.json(order)
    })
})

router.get("/orders/:id", function(req,res) {
    Order.findById(mongoose.Types.ObjectId(req.params.id), function (err, order){
        if(err) console.log(err)
        res.json(order)
    })
})

router.post('/orders', function(req,res){
    var newOrder = new Order({
        ...req.body,
        id: new mongoose.Types.ObjectId()
    });
    console.log(newOrder)
    newOrder.save(function(err, order ){
        if (err)  console.log(err);
        res.json(order)
    })
})

router.delete("/orders/:id", function(req,res) {
    Order.findOneAndDelete({id: mongoose.Types.ObjectId(req.params.id)}, function (err, order){
        if(err) console.log(err)
        res.json(order)
    })
})


module.exports = router;