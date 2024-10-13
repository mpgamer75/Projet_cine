const express = require('express');
const app=express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello World this is my first API");
});

app.listen(port,()=>{
    console.log('Server is running at http://localhost:${port}'); // le $ est du jQuery ==> prend tous les arguments 
});