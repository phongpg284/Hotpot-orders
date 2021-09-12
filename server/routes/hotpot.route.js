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
    Hotpot.findOne({ id: req.params.id }, function (err, hotpot) {
        if(err)
        console.log(err);
        res.json(hotpot);
    })
})

router.post("/hotpots", function (req, res) {
    var hotpot = new Hotpot(req.body);
    hotpot.save(function (err, hotpots) {
        if (err)
        console.log(err)
        res.json(hotpots)
    })
})

router.delete("/hotpots/:id", function(req,res) {
    Hotpot.findOneAndDelete({ id: req.params.id })
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
    Hotpot.findOneAndUpdate({ id: req.params.id }, req.body, {useFindAndModify: false})
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
