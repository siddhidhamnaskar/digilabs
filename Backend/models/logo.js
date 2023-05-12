const mongoose=require('mongoose');

const logoSchema=new mongoose.Schema({
    img:{
        data:Buffer,
        ContentType:String
    }
    
}
)


const Logos=mongoose.model('Logo',logoSchema)
module.exports=Logos;