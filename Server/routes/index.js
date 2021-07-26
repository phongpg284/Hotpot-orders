const express = require('express');
const router = express.Router();
const mongoose =  require("mongoose")
const Order = require("../modals/orders")
const Item = require("../modals/items")

router.get("/orders", function(req,res) { 
    Order.find(function (err, order) {
        if(err) console.log(err)
        res.json(order)
    })
})

// router.get("/orders/:id", function(req,res) {
//     Order.findById(mongoose.Types.ObjectId(req.params.id), function (err, order){
//         if(err) console.log(err)
//         res.json(order)
//     })
// })

router.post('/orders', function(req,res){
    // var newOrder = new Order({
    //     _id: new mongoose.Types.ObjectId(),
    //     "userId": 0812,
    // "tableID": 1,
    // "guestQty": 9,
    // "priceType": 100,
    // "hotpotType": "lau chua cay"
    // })
    
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

router.get("/items", function(req,res) {
    Item.find(function (err, items) {
        if(err)
        console.log(err);
        res.json(items);
    })
})

router.get("/items/:id", function(req,res) {
    
    Item.findById(mongoose.Types.ObjectId(req.params.id), function (err, item) {
        if(err)
        console.log(err);
        res.json(item);
    })
})

router.post("/items", function (req, res) {
    var items = new Item({
        ...req.body,
        id: new mongoose.Types.ObjectId()
    });
    items.save(function (err, items) {
        if (err)
        console.log(err)
        res.json(items)
    })
})

module.exports = router;