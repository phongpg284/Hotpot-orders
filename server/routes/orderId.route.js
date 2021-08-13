var router = require("express").Router()
const Order = require("../modals/orders")

router.get("/ordersId", function(req,res) { 
    Order.find(function (err, orders) {
        if(err) console.log(err)
        res.setHeader("Content-Range", orders.length)
        res.json(orders.map(order => order.id));
    })
})

router.post('/orders', function(req,res){
    var newOrder = new Order(req.body);
    console.log(newOrder)
    newOrder.save(function(err, order ){
        if (err)  console.log(err);
        res.json(order.id)
    })
})


module.exports = router