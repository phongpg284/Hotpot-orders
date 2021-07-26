require('dotenv').config()
const PORT = process.env.PORT;
const express = require("express");
const router = require("./routes/index")
const mongoose = require("mongoose");
const path = require("path")

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology: true }, (err) => {
    if(err) throw err;
    console.log("Connected successfully")
});

const app = express();
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", router)

app.listen(PORT, () => {
    console.log(`Server listen at port: ${PORT}`)
})