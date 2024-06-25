import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app=express();
const Port=3000;
const API_URL="http://localhost:4000"


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

function logger(req,res,next){
    console.log("request method:",req.method);
    console.log('request Url:',req.url)
    next();
}
app.use(logger);

app.get('/',async(req,res)=>{
    try{
        console.log('hellow champ')
        const response=await axios.get(`${API_URL}/dogData`);
        res.json(response.data)


    }catch(err){
        res.status(500).json({message:'error fetching dogData'});
    }
    
})

app.post('/api/puppies',async(req,res)=>{
    try{
        const data= await axios.post(`${API_URL}/dogData`,req.body)
        console.log(res.data)
        res.sendStatus(201).json(data)

    }catch(err){
        res.status(500).json({message:'error creating a post'})
    }
})

app.post('/login',(req,res)=>{
    res.sendStatus(201)
})

app.listen(Port,()=>{
    console.log(`server running on port ${Port}`);
})

