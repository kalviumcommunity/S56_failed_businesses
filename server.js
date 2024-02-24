const express = require('express')
const { connected, isConnected } = require('./db');
const app = express()
const port = 3000

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
app.get('/ping',(req,res)=>{
    try{
        res.send("Pong")
    }
    catch(err){
        console.log(err)
    }
})
if (require.main === module) {
    connected()
    app.listen(port, async () => {
    //   await connected();
  
      console.log(`🚀 server running on PORT: ${port}`);
    });
  }