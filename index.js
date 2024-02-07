require('dotenv').config();
const express=require ('express')
const app=express()
const port=process.env.port||3000;
app.get('/',(req,res)=>{
    res.send('/ is being accessed')
})

app.get('/twitter',(req,res)=>{
    res.send("/twitter is being accessed");
})
app.listen(port,()=>{
    console.log(`example listening on ${port}`);
})
