const express = require('express')
const { connected, isConnected } = require('./db');
const router = require('./routes');
const business = require("./model.js")
const cors = require("cors")
const port = 3000


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