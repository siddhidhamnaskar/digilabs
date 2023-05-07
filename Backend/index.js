const express=require('express');
const cors=require('cors');
const dotenv =require('dotenv');
const User=require('./models/user');
const bcrypt=require('bcryptjs')
const connection=require('./Config/db')
dotenv.config();
const PORT=process.env.PORT
const app=express();
app.use(cors());
app.use(express.json());


app.post('/account',async(req,res)=>{
    try{
        const salt=await bcrypt.genSalt(8)
        const hashPass=await bcrypt.hash(req.body.password,salt )

        const user= new User({
            Name:req.body.name,
            Email:req.body.email,
            Password:hashPass
        })
        const users=await user.save();
        res.status(200).json(users);


    }
    catch(err){
        res.status(500).json(err);
    }

})

app.get('/admin',async(req,res)=>{
    try{
        const data=await User.find();
        res.status(200).json(data);
    }
    catch(err){
        res.status(404).json(err);
    }
})

app.listen(PORT,()=>{
    try{
        connection();
        console.log(`Server listening to ${PORT} `);

    }
    catch(err){
        console.log("Error")
    }
   

})