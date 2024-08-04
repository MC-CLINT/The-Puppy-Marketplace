
//  'C:\Users\agbog\Desktop\Puppy Marketplace\The-Puppy-MarketplaceAdminside\my-app\src\index.js'

import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from 'path';
import cors from 'cors';
import pg from 'pg'

const app = express();
const Port = 8000;
const API_URL = "http://localhost:4000";
const __dirname = dirname(fileURLToPath(import.meta.url));
const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    password:"@chim0t@",
    database:"PuppyMarketPlace",
    port: 5000,
  
  })
  db.connect()

app.use(express.static(path.join(__dirname, 'Adminside/my-app/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

function logger(req, res, next) {
    console.log("Request method:", req.method);
    console.log('Request URL:', req.url);
    next();
}
app.use(logger);

app.get('/', async (req, res) => {
    try {
        console.log('Hello champ');
        const response = await axios.get(`${API_URL}/dogData`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching dogData' });
    }
});

app.post('/api/puppies', async (req, res) => {
    try {
        const data = await axios.post(`${API_URL}/dogData`, req.body);
        console.log(res.data);
        res.sendStatus(201).json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error creating a post' });
    }
});

// Serve the admin login page
app.get('/admin/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'Adminside/my-app/build', 'index.html'));
});

//user registration page
app.get('/register',async(req,res)=>{
    res.sendFile(path.join(__dirname, 'Adminside/my-app/build', 'index.html'));
})

app.post('/register', async (req, res) => {
    try {
        const { fullName, email, passWord } = req.body;
        const all_data = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        console.log(all_data.rows); // Log existing users

        if (all_data.rows.length > 0) {
            res.send("User email already exists; try logging in instead.");
        } else {
            const new_user = await db.query('INSERT INTO users (Username, email, password) VALUES ($1, $2, $3)', [fullName, email, passWord]);
            console.log(new_user); // Log the result of the insert
            res.send("Registered successfully");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});



// app.post('/register',async(req,res)=>{
//     try{
//         const { fullName, email, passWord } = req.body;
//         const all_data= await db.query("SELECT * from users Where email=$1",[email])
//         console.log(all_data)
//         if(all_data.rows.length>0){
//             res.send("User email already exist try logging in instead.")

//         }else{
//             const new_user=await db.query('INSERT INTO users (Username,email,password) VALUES($1,$2,$3)',[fullName, email, passWord])
//             res.send(" registered")
//             console.log(new_user.rows)
//         }
//     }catch(error){

//     }
   

// })

// Handle admin login POST request
app.post('/admin/login', (req, res) => {
    const { fullName, email, passWord } = req.body;
    
    
    // console.log('Full Name:', fullName);
    // console.log('Email:', email);
    // console.log('Password:', passWord);
    // res.status(200).json({ message: 'Login successful' });

});

app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});
