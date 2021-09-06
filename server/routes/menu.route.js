var router = require("express").Router()
const Hotpot = require("../modals/hotpot")
var mongoose = require("mongoose");

router.get("/menu", function(req,res) { 
    Hotpot.find(function (err, hotpots) {
        if(err) console.log(err)
        res.setHeader("Content-Range", hotpots.length)
        res.json(hotpots.map((hotpot) => ({
                name: hotpot.name,
                id: hotpot.id
            })
        ));
    })
})

// router.get("/menu/:id", function(req,res) {
//     Hotpot.findById(mongoose.Types.ObjectId(req.params.id), function (err, hotpot){
//         if(err) console.log(err)
//         res.json(hotpot)
//     })
// })

router.post('/menu', function(req,res){
    var newHotpot = new Hotpot(req.body);
    newHotpot.save(function(err, hotpot){
        if (err)  console.log(err);
        const {ingredients, ...restHotpot} = hotpot
        res.json(restHotpot)
    })
})

router.delete("/menu/:id", function(req,res) {
    Hotpot.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id))
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

router.put("/hotpots/:id", function(req,res) {
    var id = req.params.id
    Hotpot.findByIdAndUpdate(mongoose.Types.ObjectId(id), req.body)
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