const express = require("express");
const { get } = require("mongoose");
const JWT = require("jsonwebtoken")
const router = express.Router();
const {businesses,users} = require("./model.js")
router.get("/get", (req, res, next) => {
    try {
        res.send("Get request on home page");
    } catch (error) {
        next(error); 
    }
});

router.get("/getuser/:id",async(req,res)=>{
    let result = await businesses.find({})
    res.json(result) 
})
router.post("/post", (req, res, next) => {
    try {
        res.send("Post request on home page");
    } catch (error) {
        next(error);
    }
});

router.patch("/patch", (req, res, next) => {
    try {
        res.send("Patch request on home page");
    } catch (error) {
        next(error);
    }
});

router.delete("/delete", (req, res, next) => {
    try {
        res.send("Delete request on home page");
    } catch (error) {
        next(error);
    }
});
router.post("/auth",(req,res)=>{
    const {username} = req.body
    const token = JWT.sign({username:username},"Secret_key")
    users.create({username:username})
    res.send(token)
})
module.exports = router;
