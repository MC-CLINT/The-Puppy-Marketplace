// import express from 'express';
// import bodyParser from 'body-parser';

// const app=express();
// const Port=4000;

// const PuppyListing=[
//     {
//         id:1,
//         Breed:'German Sherperd',
//         name:'Puffy',
//         price:'$20',
//         ImageUrl:''
//     },
// ]
// let lastId=3;
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// app.get("/api/PuppyListing",(req,res)=>{
//     console.log(PuppyListing);
//     res.json(PuppyListing)
// })

// app.post('/api/dogData',(req,res)=>{
//     const newID=lastId+=1;
//     const  new_Puppy_Listing={
//         id: newID,
//         Breed: req.body.Breed,
//         price:req.body.price,
//         name: req.body.name,
//         imageURL:req.body.imageURL
        
//     }
//     lastId=newID
//     dogData.push(new_Puppy_Listing)
//     res.status(201).json(new_Puppy_Listing)
 
// })
// app.delete('/delete/:id',(req,res)=>{
//     const dogId=req.params.id
//     const searchDog_id=dogData.findIndex((a_dog)=>a_dog.id==id)
//     if(searchDog_id>-1){
//         dogData.splice(searchDog_id,1)
//         res.sendStatus(200);
//     }else{
//         res.status(404);
//         res.json({error:`message with id ${messageId} was not found, no message ${id} exists`})
//     }
// }
// )
// let messagingData=[
//     {
//         messageId:1,
//         sender_Id:1,
//         reciever_Id:2,
//         message_content :"i want some puppies",
//         Is_read: false
//     }
// ]
// let lastMessage_Id=1
// //messaging Endpoints

// //get a message
// app.get('/message',(req,res)=>{
//     res.json(messagingData)
// })
// // post a message
// app.post('/message',(req,res)=>{
//     const newId=lastMessage_Id+=1
//     const new_messaging_Data={
//         messageId:newId,
//         senderId:req.body.senderId,
//         recieverId:req.body.recieverId,
//         content:req.body.content,
//     }
//     lastMessage_Id=newId
//     messagingData.push(new_messaging_Data)
//     res.status(201).json(new_messaging_Data)
// })
// // end-point to delete a particular message
// app.delete('/message/:id',(req,res)=>{
//     const messageId=req.params.id;
//     console.log(messageId)
//     const searchId=messagingData.findIndex((message)=>message.id==messageId)
//     if(searchId>-1){
//         messagingData.splice(searchId,1);
//         res.sendStatus(200)
//     }else{
//         res.status(404);
//         res.json({error:`message with id ${messageId} was not found, no message ${id} exists`})
//     }
// })

// app.listen(Port,()=>{
//     console.log(`Listening on port ${Port}`)
// })

//above was kept just in case(doesn't have database connected to it. it uses an object and arrays)
// //would later include Bearer token for authentication


import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from "url";
import { dirname } from "path";
import pg from "pg";
import env from "dotenv";

const app = express();
const Port = process.env.PORT || 4000;
const __dirname = dirname(fileURLToPath(import.meta.url));
env.config();
// Serve static files from the React app
const reactAppPath = path.join(__dirname, '..', 'Puppy_marketplace', 'dist');
app.use(express.static(reactAppPath));


const { Pool } = pg;

const pool = new Pool({
    connectionString:process.env.POSTGRES_URL
    
   
  });
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const PuppyListing = [
//     {
//         id: 1,
//         Breed: 'German Shepherd',
//         name: 'Puffy',
//         price: '$20',
//         ImageUrl: ''
//     },
// ];
let lastId = 10;

// API Endpoints
app.get("/api/PuppyListing", async(req, res) => {
try{
    const all_data=await pool.query("SELECT * FROM PuppyListings ")
     res.json(all_data.rows);
}catch(err){
console.log(err)
res.sendStatus(500)
}
 
});

    
   

app.post('/api/puppyInfo', async(req, res) => {
    const newID = lastId += 1;
    const new_Puppy_Listing = {
        Breed: req.body.Breed,
        Puppy_name:req.body.Puppy_name,
        price: req.body.price,
        description: req.body.description,
        image_url: req.body.image_url,
        seller_id: req.body.seller_id
    };
    lastId = newID;
   const adding_data=await pool.query("INSERT INTO PuppyListings (puppy_name, breed, price, image_url , description,seller_id) VALUES($1,$2,$3,$4,$5,$6)",[ new_Puppy_Listing.Puppy_name, new_Puppy_Listing.Breed, new_Puppy_Listing.price, new_Puppy_Listing.image_url, new_Puppy_Listing.description,new_Puppy_Listing.seller_id])
    res.status(201).json(adding_data.rows);
    
});

app.delete('/delete/:id', async(req, res) => {
    try{
        const PuppyListing_Id = req.params.id;
        const searchDog_id = await pool.query("SELECT listing_id FROM PuppyListings WHERE listing_id=$1",[PuppyListing_Id])
        if (searchDog_id.rowCount > 0) {
            
                await pool.query("DELETE FROM PuppyListings WHERE listing_id=$1",[PuppyListing_Id])
                res.json({message:`Dog with id ${PuppyListing_Id} has been deleted`})
        } else {
            res.json({ error: `Dog with id ${PuppyListing_Id} was not found.` });
        }
    }catch(err){
        res.sendStatus(500)
        console.log(err);
    }
   
  
});

let messagingData = [
    {
        message_id: 1,
        sender_id: 1,
        receiver_id: 2,
        message_content: "I want some puppies",
        Is_read: false
    }
];
let lastMessage_Id = 1;

// Messaging Endpoints
app.get('/api/message', (req, res) => {
    res.json(messagingData);
});

app.post('/api/message', (req, res) => {
    const newId = lastMessage_Id += 1;
    const new_messaging_Data = {
        messageId: newId,
        sender_Id: req.body.sender_Id,
        receiver_Id: req.body.receiver_Id,
        message_content: req.body.message_content,
        Is_read: false
    };
    lastMessage_Id = newId;
    messagingData.push(new_messaging_Data);
    res.status(201).json(new_messaging_Data);
});

app.delete('/api/message/:id', (req, res) => {
    const messageId = req.params.id;
    console.log(messageId);
    const searchId = messagingData.findIndex((message) => message.messageId == messageId);
    if (searchId > -1) {
        messagingData.splice(searchId, 1);
        res.sendStatus(200);
    } else {
        res.status(404).json({ error: `Message with id ${messageId} was not found.` });
    }
});

// For any other routes, serve the React app's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(reactAppPath, 'index.html'));
});

app.listen(Port, () => {
    console.log(`Listening on port ${Port}`);
});
