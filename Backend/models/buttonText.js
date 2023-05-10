const mongoose=require('mongoose');

const textSchema=new mongoose.Schema({
    text:{type:"String",required:true},
    
}
)


const Texts=mongoose.model('Text',textSchema)
module.exports=Texts;