
const  {Schema,model} = require("mongoose")

const WalletUser= new Schema({
    name:String,
    password:String,
    uid:String,
    amount:Object,
    message:Object,
    balance:Number,
    send:Object,
    received:Object,
    all:Object

})



module.exports = model("User",WalletUser)
