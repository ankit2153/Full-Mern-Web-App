const express = require("express")

const app = express()

const mongoose = require("mongoose")

const userModel = require("./models/users")

const cors = require("cors")

app.use(cors())


app.use(express.json());

mongoose.connect("mongodb+srv://testuser:test123@cluster0.lo605tm.mongodb.net/?retryWrites=true&w=majority")

app.get("/getUsers",(req,res)=>{

    userModel.find({})
        .then(result => {
            res.json(result);
          })
          .catch(err => {
            res.json(err);
          });
});

app.post("/createUser",async (req,res)=>{

    const user = req.body;
    const newUser = new userModel(user);

    await newUser.save();
  
    res.json();

});



app.listen(3001,()=>{

    console.log("server runs perfectly")


})



