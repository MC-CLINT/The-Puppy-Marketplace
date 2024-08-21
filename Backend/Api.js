import express from 'express';
import bodyParser from 'body-parser';

const app=express();
const Port=4000;

const PuppyListing=[
    {
        id:1,
        Breed:'German Sherperd',
        name:'Puffy',
        price:'$20',
        ImageUrl:''
    },
]
let lastId=3;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/api/PuppyListing",(req,res)=>{
    console.log(PuppyListing);
    res.json(PuppyListing)
})

app.post('/api/dogData',(req,res)=>{
    const newID=lastId+=1;
    const  new_Puppy_Listing={
        id: newID,
        Breed: req.body.Breed,
        price:req.body.price,
        name: req.body.name,
        imageURL:req.body.imageURL
        
    }
    lastId=newID
    dogData.push(new_Puppy_Listing)
    res.status(201).json(new_Puppy_Listing)
 
})
app.delete('/delete/:id',(req,res)=>{
    const dogId=req.params.id
    const searchDog_id=dogData.findIndex((a_dog)=>a_dog.id==id)
    if(searchDog_id>-1){
        dogData.splice(searchDog_id,1)
        res.sendStatus(200);
    }else{
        res.status(404);
        res.json({error:`message with id ${messageId} was not found, no message ${id} exists`})
    }
}
)
let messagingData=[
    {
        messageId:1,
        sender_Id:1,
        reciever_Id:2,
        message_content :"i want some puppies",
        Is_read: false
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
// end-point to delete a particular message
app.delete('/message/:id',(req,res)=>{
    const messageId=req.params.id;
    console.log(messageId)
    const searchId=messagingData.findIndex((message)=>message.id==messageId)
    if(searchId>-1){
        messagingData.splice(searchId,1);
        res.sendStatus(200)
    }else{
        res.status(404);
        res.json({error:`message with id ${messageId} was not found, no message ${id} exists`})
    }
})

app.listen(Port,()=>{
    console.log(`Listening on port ${Port}`)
})
