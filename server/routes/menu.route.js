var router = require("express").Router()
const Menu = require("../modals/menus")
var mongoose = require("mongoose");

router.get("/menus", function(req,res) { 
    Menu.find(function (err, menus) {
        if(err) console.log(err)
        res.setHeader("Content-Range", menus.length)
        res.json(menus);
    })
})

router.get("/menus/:id", function(req,res) {
    Menu.findById(mongoose.Types.ObjectId(req.params.id), function (err, menu){
        if(err) console.log(err)
        res.json(menu)
    })
})

router.post('/menus', function(req,res){
    var newMenu = new Menu(req.body);
    newMenu.save(function(err, menu){
        if (err)  console.log(err);
        res.json(menu)
    })
})

router.delete("/menus/:id", function(req,res) {
    Menu.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id))
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

router.put("/menus/:id", function(req,res) {
    var id = req.params.id
    Menu.findByIdAndUpdate(mongoose.Types.ObjectId(id), req.body)
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