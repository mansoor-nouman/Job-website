const express = require("express");
const app = express();
const mongodb = require("mongodb");
const DB = "Jobportal";
const URL = "mongodb+srv://mansoor:mansoor123@cluster0.ybuuf.mongodb.net/test?authSource=admin&replicaSet=atlas-qox0hn-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
require('dotenv').config();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());

app.post("/Candidatesignup", async function(req,res){
    console.log(req.body)
    try {
        let connection = await mongodb.connect(URL);
        let db = connection.db(DB);  
        let uniqueEmail = await db.collection("candidateuser").findOne({ email: req.body.email });
        if (uniqueEmail) {
            res.status(401).json({
                message: "email already exist"
            })
        } else {
            let salt = await bcrypt.genSalt(10)
            let hash = await bcrypt.hash(req.body.userPassword, salt)
            req.body.userPassword = hash;
            await db.collection("candidateuser").insertOne(req.body);
            await connection.close();
            res.json({
                message: "User Registerd"
            })
        }
      } catch (error) {
        console.log(error);
      }
})

app.post("/Candidatelogin", async function (req, res) {
    try {
        let connection = await mongodb.connect(URL);
        let db = connection.db(DB);
        let user = await db.collection("candidateuser").findOne({ email: req.body.email })
        if (user) {
            let isPassword = await bcrypt.compare(req.body.userPassword, user.userPassword);
            if (isPassword) {
                let token=jwt.sign({_id:user._id}, "sdmkjsadfnjsadsdaxdxadetkmusdc")
                console.log(token);
                res.json({
                    message: "allow", token, id:user._id
                })
            } else {
                res.status(404).json({
                    message: "Email or password is incorrect"
                })
            }
        } else {
            res.status(404).json({
                message: "Email or password is incorrect"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

app.post("/Recruitersignup", async function(req,res){
    console.log(req.body)
    try {
        let connection = await mongodb.connect(URL);
        let db = connection.db(DB);  
        let uniqueEmail = await db.collection("Recruiteruser").findOne({ email: req.body.email });
        if (uniqueEmail) {
            res.status(401).json({
                message: "email already exist"
            })
        } else {
            let salt = await bcrypt.genSalt(10)
            let hash = await bcrypt.hash(req.body.userPassword, salt)
            req.body.userPassword = hash;
            await db.collection("Recruiteruser").insertOne(req.body);
            await connection.close();
            res.json({
                message: "User Registerd"
            })
        }
      } catch (error) {
        console.log(error);
      }
})

app.post("/RecruiterLogin", async function (req, res) {
    try {
        let connection = await mongodb.connect(URL);
        let db = connection.db(DB);
        let user = await db.collection("Recruiteruser").findOne({ email: req.body.email })
        if (user) {
            let isPassword = await bcrypt.compare(req.body.userPassword, user.userPassword);
            if (isPassword) {
                let token=jwt.sign({_id:user._id}, "sdmkjsadfnjsadsdaxdxadetkmusdc")
                console.log(token);
                res.json({
                    message: "allow", token, id:user._id
                })
            } else {
                res.status(404).json({
                    message: "Email or password is incorrect"
                })
            }
        } else {
            res.status(404).json({
                message: "Email or password is incorrect"
            })
        }
    } catch (error) {
        console.log(error)
    }
})


app.post("/Addjob", async function(req,res){
    console.log(req.body)
    try {
        let connection = await mongodb.connect(URL);
        let db = connection.db(DB);
        await db.collection("Jobs").insertOne(req.body);
        connection.close();
        res.json({
            message: "Done"
        })
      } catch (error) {
        console.log(error);
      }  
})

app.post("/Applied", async function(req,res){
    console.log(req.body)
    try {
        let connection = await mongodb.connect(URL);
        let db = connection.db(DB);
        await db.collection("applied").insertOne(req.body);
        connection.close();
        res.json({
            message: "Done"
        })
      } catch (error) {
        console.log(error);
      }  
})

app.get("/jobdetails", async function(req,res){
    try {
        let connection = await mongodb.connect(URL);
        let db = connection.db(DB);
        let userdata = await db.collection("Jobs").find().toArray();
        res.json(userdata);
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
)

app.delete("/deleteorder/:id",async function(req,res){
    let connection = await mongodb.connect(URL);
        let db = connection.db("Pizzauser");
        let userdata = await db.collection("ordered").deleteOne({_id: mongodb.ObjectID(req.params.id)});
        await connection.close()
    res.json({
        message: "order Deleted"
    })
})


app.get("/userpizza/:id", async function(req,res){
    try{
        let connection = await mongodb.connect(URL);
        let db = connection.db(DB);
        let urls = await db.collection("ordered").find({userEmail : req.params.id}).toArray();
        res.json(urls)
        await connection.close();
    }catch(error){
        console.log(error)
    }
})
app.listen(process.env.PORT|| 5000);
