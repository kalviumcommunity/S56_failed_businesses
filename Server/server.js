const express = require('express')
const { connected, isConnected } = require('./db');
const router = require('./routes');
const business = require("./model.js")
const cors = require("cors")
const port = 3200


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
    const data = await business.find({});
    res.json(data);
})

app.get("/get/:_id",async (req,res)=>{
     let id = req.params._id;
    console.log(id)
    const data = await business.find({_id:req.params._id});
    res.json(data);
})
app.put('/updateuser/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const updatedUser = await business.findByIdAndUpdate(userId, {
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

app.delete("/delete/:_id",async(req,res)=>{
    const id = req.params._id;
    console.log(id)
    let del = await business.findByIdAndDelete({_id:id})
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
app.post("/updateuser", async (req, res) => {
    let payload = req.body;
    console.log(payload)
    try {
        let user = new business(payload)
        await user.save()
        res.send({
            message:"successful",
            data: user
        })
        
    } catch (error) {
        res.send("error",error)
    }
  });
if (require.main === module) {
    connected()
    app.listen(port, async () => {
    //   await connected();
  
      console.log(`🚀 server running on PORT: ${port}`);
    });
  }