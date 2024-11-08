const express = require("express");
const app = express();
const port = 3000;

app.listen(port, (req, res)=>{
    console.log(`server is running on this port: ${port}`);
})

app.get('/',(req,res)=>{
    res.send("route is working")
})