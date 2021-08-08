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
    Hotpot.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id))
    .then(data => {
        if(!data)
        res.status(404).send({message: `Cannot find Hotpot with id: ${id}`})
        else {
            res.send({ message: "Deleted hotpot successfully"})
        }
    })
    .catch(err => {
        res.status(500).send({ message: `Error updated hotpot with id: ${id}` })
    })
})

router.put("/hotpots/:id", function(req,res) {
    var id = req.params.id;
    Hotpot.findByIdAndUpdate(mongoose.Types.ObjectId(id), req.body, {useFindAndModify: false})
    .then(data => {
        if(!data)
        res.status(404).send({message: `Cannot find Hotpot with id: ${id}`})
        else {
            res.json(data)
        }
    })
    .catch(err => {
        res.status(500).send({ message: `Error updated hotpot with id: ${id}` })
    })
})

module.exports = router;
