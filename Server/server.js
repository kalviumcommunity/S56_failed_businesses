const express = require('express')
const { connected, isConnected } = require('./db');
const router = require('./routes');
const {businesses,users} = require("./model.js")

const cors = require("cors");
const Joi = require('joi');
const port = 3200
const {validateData} = require("./Validation.js")


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)


app.get('/', (req, res) => {
    try{
        res.json({
            database : isConnected() ? 'connected' : 'disconnected'}
        )
    }
    catch(err){
        console.log(err)
    }
})
app.get("/getuser",async (req,res)=>{
    const data = await businesses.find({});
    res.json(data);
})

app.get("/get/:_id",async (req,res)=>{
     let id = req.params._id;
    console.log(id)
    const data = await businesses.find({_id:req.params._id});
    res.json(data);
})
app.put('/updateuser/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const updatedUser = await businesses.findByIdAndUpdate(userId, {
            name: req.body.name,
            owner: req.body.owner,
        }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.get("/getuserdata",async(req,res)=>{
    const data = await users.find({});
    res.json(data);
})
app.delete("/delete/:_id",async(req,res)=>{
    const id = req.params._id;
    console.log(id)
    let del = await businesses.findByIdAndDelete({_id:id})
    res.send(del)
})
app.get('/ping',(req,res)=>{
    try{
        res.send("Pong")
    }
    catch(err){
        console.log(err)
    }
})

app.post("/postuser", async (req, res) => {
    let payload = req.body;
    console.log(payload)
    const {error} = validateData(payload)
    if(error){
        return res.status(400).send({error:"Invalid Data",message:"Invalid Data",details:error.details.map((error)=>error.message),status:"failed"})
    }else{

        try {
            let user = new businesses(payload)
            await user.save()
            // res.send({
            //     message:"successful",
            //     data: user
            // })
            
        } catch (error) {
            // res.status(500).send("error",error)
        }
    }
  });
if (require.main === module) {
    connected()
    app.listen(port, async () => {
    //   await connected();
  
      console.log(`🚀 server running on PORT: ${port}`);
    });
  }