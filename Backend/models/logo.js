const mongoose=require('mongoose');

const logoSchema=new mongoose.Schema({
    Cover:{type:"String",requires:true},
    
},
{
    timestamps:true
})


const Logos=mongoose.model('Logo',logoSchema)
module.exports=Logos;