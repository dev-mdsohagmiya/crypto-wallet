const WalletUser = require("../model/WalletUser")
const { v4: uuidv4 } = require('uuid');
const { Router } = require("express");
const router = require("express").Router()

router.get("/",(req,res)=>{
    res.send("hello blockchain v0.2")
})
router.post("/wallet",(req,res)=>{
   const {name,password} = req.body
   const obj = {
    name,
    password,
    uid:uuidv4(),
    amount:[0],
    message:[0],
    balance:0,
    received:null,
    send:null,
    all:null
    

   }
const data = new WalletUser(obj)
console.log(data)
res.status(200).json({id:data._id,uid:data.uid,name:data.name,amount:data.amount,message:data.message,balance:data.balance,send:data.send,received:data.reveived,all:data.all})
data.save()


 
})
router.post("/dashbord",(req,res)=>{
     WalletUser.findOne({_id:req.body.message}).then((result)=>{
        console.log(result)
       if(result){
         res.status(200).json(result)
       }
     })
})
router.post("/mwallet",(req,res)=>{
   console.log(req.body)
   WalletUser.findOne({uid:req.body.key,password:req.body.password}).then((result)=>{
      console.log(result)
      if(result){
         res.status(200).json(result)
      }
   })
})


module.exports = router