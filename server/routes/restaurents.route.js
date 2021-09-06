var router = require("express").Router()
const Restaurent = require("../modals/restaurents")
var mongoose = require("mongoose");

router.get("/restaurents", function(req,res) { 
    Restaurent.find(function (err, restaurents) {
        if(err) console.log(err)
        res.setHeader("Content-Range", restaurents.length)
        res.json(restaurents);
    })
})

router.get("/restaurents/:id", function(req,res) {
    Restaurent.findById(mongoose.Types.ObjectId(req.params.id), function (err, restaurent){
        if(err) console.log(err)
        res.json(restaurent)
    })
})

router.post('/restaurents', function(req,res){
    var newrestaurent = new Restaurent(req.body);
    newRestaurent.save(function(err, restaurent){
        if (err)  console.log(err);
        res.json(restaurent)
    })
})

router.delete("/restaurents/:id", function(req,res) {
    Restaurent.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id))
    .then(data => {
        if(!data)
        res.status(404).send({message: `Cannot find order with id: ${id}`})
        else {
            res.send({ 
                message: "Deleted order successfully",
                data: data
            })
        }
    })
    .catch(err => {
        res.status(500).send({ message: `Error deleted order with id: ${id}` })
    })
})

router.put("/restaurents/:id", function(req,res) {
    var id = req.params.id
    Restaurent.findByIdAndUpdate(mongoose.Types.ObjectId(id), req.body)
    .then(data => {
        if(!data)
        res.status(404).send({message: `Cannot find order with id: ${id}`})
        else {
            res.json(data)
        }
    })
    .catch(err => {
        res.status(500).send({ message: err })
    })
})


module.exports = router;