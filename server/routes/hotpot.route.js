const Hotpot = require("../modals/hotpot");

var router = require("express").Router()
var mongoose = require("mongoose");
router.get("/hotpots", function(req,res) {
    Hotpot.find(function (err, hotpots) {
        if(err)
        console.log(err);
        res.setHeader("Content-Range", hotpots.length)
        res.json(hotpots);
    })
})

router.get("/hotpots/:id", function(req,res) {
    Hotpot.findById(mongoose.Types.ObjectId(req.params.id), function (err, hotpot) {
        if(err)
        console.log(err);
        res.json(hotpot);
    })
})

router.post("/hotpots", function (req, res) {
    var hotpot = new Hotpot(req.body);
    console.log(hotpot)
    hotpot.save(function (err, hotpots) {
        if (err)
        console.log(err)
        res.json(hotpots)
    })
})

router.delete("/hotpots/:id", function(req,res) {
    Hotpot.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id), function (err, hotpot){
        if(err) console.log(err)
        res.json(hotpot)
    })
})

module.exports = router;
