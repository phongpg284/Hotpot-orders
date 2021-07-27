const Hotpot = require("../modals/hotpot");

var router = require("express").Router()
var mongoose = require("mongoose");
router.get("/hotpots", function(req,res) {
    Hotpot.find(function (err, hotpots) {
        if(err)
        console.log(err);
        res.json(hotpots);
    })
})

// router.get("/hotpots/:id", function(req,res) {
    
//     Item.findById(mongoose.Types.ObjectId(req.params.id), function (err, item) {
//         if(err)
//         console.log(err);
//         res.json(item);
//     })
// })

router.post("/hotpots", function (req, res) {
    var hotpot = new Hotpot({
        ...req.body,
        id: new mongoose.Types.ObjectId()
    });
    console.log(hotpot)
    hotpot.save(function (err, hotpots) {
        if (err)
        console.log(err)
        res.json(hotpots)
    })
})

module.exports = router;
