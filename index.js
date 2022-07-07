const database =require("./configs/db")
const express=require("express")
const itemController= require('./controller/items.controller');
const cartController= require('./controller/cart.controller');

const app=express()

app.use(express.json())

app.use("/items", itemController);
app.use("/order", itemController);


app.listen(5000, async ()=>{
    try{
        await database;
    }
	catch(err){
        console.log("error",err)
    }
    console.log("listening to port 5000")
})