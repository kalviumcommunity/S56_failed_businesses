const express = require("express")
const router = express.Router()

router.get("/get",(req,res)=>{
    res.send("Get request on home page")
})
router.post("/post",(req,res)=>{
    res.send("Post request on home page")
})
router.patch("/patch",(req,res)=>{
    res.send("Patch request on home page")
})
router.delete("/delete",(req,res)=>{
    res.send("Delete request on home page")
})

module.exports=router