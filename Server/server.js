const express = require('express')
const { connected, isConnected } = require('./db');
const router = require('./routes');
const business = require("./model.js")
const cors = require("cors")
const app = express()
const port = 3000
app.use(router)
app.use(cors())
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
app.post('/updateuser', async (req, res) => {
    try {
      const { id, name, owner } = req.body;
      const newBusiness = new businesses({
        id,
        name,
        owner,
      });
      await newBusiness.save();
  
      res.status(201).json({ message: 'Data added successfully' });
    } catch (error) {
      console.error('Error adding data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
if (require.main === module) {
    connected()
    app.listen(port, async () => {
    //   await connected();
  
      console.log(`🚀 server running on PORT: ${port}`);
    });
  }