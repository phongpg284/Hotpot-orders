var router = require("express").Router()
const Hotpot = require("../modals/hotpot")
var mongoose = require("mongoose");

router.get("/menu", function(req,res) { 
    Hotpot.find(function (err, hotpots) {
        if(err) console.log(err)
        res.setHeader("Content-Range", hotpots.length)
        res.json(hotpots.map((hotpot) => ({
                name: hotpot.name,
                id: hotpot.id,
                price: hotpot.price
            })
        ));
    })
})

router.get("/menu/:id", function(req,res) {
    Hotpot.findOne({ id: req.params.id}, function (err, hotpot){
        if(err) console.log(err)
        res.json(hotpot)
    })
})

router.post('/menu', function(req,res){
    var newHotpot = new Hotpot(req.body);
    newHotpot.save(function(err, hotpot){
        if (err)  console.log(err);
        const {ingredients, ...restHotpot} = hotpot
        res.json(restHotpot)
    })
})

router.delete("/menu/:id", function(req,res) {
    Hotpot.findOneAndDelete({ id: req.params.id })
    .then(data => {
        if(!data)
        res.status(404).send({message: `Cannot find menu with id: ${id}`})
        else {
            res.send({ 
                message: "Deleted menu successfully",
                data: data
            })
        }
    })
    .catch(err => {
        res.status(500).send({ message: `Error deleted menu with id: ${id}` })
    })
})

router.put("/menu/:id", function(req,res) {
    console.log(req.body)
    Hotpot.findOneAndUpdate({ id: req.params.id }, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data)
        res.status(404).send({message: `Cannot find menu with id: ${id}`})
        else {
            res.json(data)
        }
    })
    .catch(err => {
        res.status(500).send({ message: `Error updated menu with id: ${id}` })
    })
})


module.exports = router;