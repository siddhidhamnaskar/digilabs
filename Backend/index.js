const express=require('express');
const cors=require('cors');
const dotenv =require('dotenv');
const User=require('./models/user');
const bcrypt=require('bcryptjs')
const connection=require('./Config/db')
const multer=require('multer');
  
const Logos =require('./models/logo')
const Texts=require('./models/buttonText')
dotenv.config();
const PORT=process.env.PORT
const fs =require('fs');
const app=express();
 app.use(cors());

app.use(express.json());
 

app.post('/',async(req,res)=>{
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

app.get('/',async(req,res)=>{
    try{
        const data=await User.find();
        res.status(200).json(data);
    }
    catch(err){
        res.status(404).json(err);
    }
})

app.delete('/:id',async(req,res)=>{
    try{
        console.log(req.params);
        const Data=await User.findByIdAndDelete(req.params.id);
        res.status(200).json(Data);
    }
    catch(err){
        res.status(404).json(err);
    }
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

  

app.post('/post',upload.single('file'),async(req,res)=>{
    try{
    
      
       const data=await Logos.deleteMany();
        const logo=new Logos({
            img: {
                data: fs.readFileSync("uploads/" + req.file.filename),
                contentType: "image/png",
            }
        })
        const Logo=await logo.save();
        res.status(200).json(Logo);

         
    }
    catch(err){
        res.status(505).json(err);
    }

})

app.get('/logo',async(req,res)=>{
    try{
        const logos=await Logos.find();
        res.status(200).json(logos);

    }
    catch(err){
        res.status(404).json(err);

    }
})


app.post('/text',async(req,res)=>{
    try{
       await Texts.deleteMany();
        console.log(req.body);
        const newText=new Texts({
            text:req.body.text
        })
        const text=await newText.save();
        res.status(200).json(text)

    }
    catch(err){
      
        res.status(500).json(err);

    }

})

app.get('/text',async(req,res)=>{
    try{
        const textData= await Texts.find();
        res.status(200).json(textData);
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