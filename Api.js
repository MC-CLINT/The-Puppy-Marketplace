import express from 'express';
import bodyParser from 'body-parser';

const app=express();
const Port=4000;


const dogData=[

    {
        id:1,
        DogBreed:'German Sherperd',
        price: '$20',
        imageURL:"dogImage2"

    },
    {
        id:2,
        DogBreed:'Labrador Retriever',
        price: '$20',
        imageURL: "dogImage1"

    },
    {
        id:3,
        DogBreed:'Bull Dog',
        price: '$20',
        imageURL:"dogImage3"

    }
]
let lastId=3;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//This is just the schema for the puppy listings
//which is subject to change and get more complex

//This is to get all posts
app.get("/dogData",(req,res)=>{
    console.log(dogData)
    res.json(dogData)
})

//create listing
app.post('/dogData',(req,res)=>{
    const newID=lastId+=1;
    const  new_dog_Data={
        id: newID,
        DogBreed: req.body.DogBreed,
        price:req.body.price,
        imageURL:req.body.imageURL
        
    }
    lastId=newID
    dogData.push(new_dog_Data)
    res.status(201).json(new_dog_Data)
 
})

let messagingData=[
    {
        messageId:1,
        senderId:1,
        recieverId:2,
        content :"i want some puppies"

    }
]
let lastMessage_Id=1
//messaging Endpoints

//get a message
app.get('/message',(req,res)=>{
    res.json(messagingData)
})
// post a message
app.post('/message',(req,res)=>{
    const newId=lastMessage_Id+=1
    const new_messaging_Data={
        messageId:newId,
        senderId:req.body.senderId,
        recieverId:req.body.recieverId,
        content:req.body.content,
    }
    lastMessage_Id=newId
    messagingData.push(new_messaging_Data)
    res.status(201).json(new_messaging_Data)
})

app.listen(Port,()=>{
    console.log(`Listening on port ${Port}`)
})




