const mongoose=require('mongoose');

const logoSchema=new mongoose.Schema({
    Cover:{type:"String",required:true},
    
},
{
    timestamps:true
})


const Logos=mongoose.model('Logo',logoSchema)
module.exports=Logos;