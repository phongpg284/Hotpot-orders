require('dotenv').config()
const PORT = process.env.PORT;
const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const cors = require("cors")

var route = require("express").Router()
var hotpot = require("./routes/hotpot.route");
var ingredient = require("./routes/ingredient.route");
var order = require("./routes/order.route");
var ingredientOrder = require("./routes/ingredientOrder.route");

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology: true }, (err) => {
    if(err) throw err;
    console.log("Connected successfully")
});

const app = express();
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', ['*']);
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append( 'Access-Control-Expose-Headers', 'Content-Range')
    res.append('Content-Range','bytes : 0-9/*')
    next()
});
// app.use(express.static(path.join(__dirname, 'public')));
app.use("/api", hotpot);
app.use("/api", ingredient);
app.use("/api", order);
app.use("/api", ingredientOrder);

app.listen(PORT, () => {
    console.log(`Server listen at port: ${PORT}`)
})