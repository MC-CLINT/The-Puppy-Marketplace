import express from 'express';
import axios from 'axios';
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from 'path';
import cors from 'cors';
import pg from 'pg';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import session from 'express-session';
import passport from 'passport';
import { Strategy } from 'passport-local';

const app=express();
const Port=8000;
const API_URL="http://localhost:4000";
const __dirname = dirname(fileURLToPath(import.meta.url));
const corsOptions = {
    origin: 'http://localhost:5173',
};
const saltRounds=5;


const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})
// const db = new pg.Client({
//     user: process.env.PG_USER,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT,
//   });
//   db.connect();


  const distPath = path.join(__dirname, '..', 'Puppy_marketplace', 'dist');
console.log(distPath)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions))
app.use(express.static(distPath));
app.use(session({
    secret:"TOPSECRETWORD",
    resave:false,
    saveUninitialized:true,
}))

app.use(passport.initialize())
app.use(passport.session());

// Serve static files from the dist directory


//Middleware
function logger(req, res, next) {
    console.log("Request method:", req.method);
    console.log('Request URL:', req.url);
    next();
}
app.use(logger);

//serve the Homepage when the webapp opens
app.get('/PuppyMarketPlace', async (req, res) => {
    // try {
    //     console.log('Hello champ');
    //     const response = await axios.get(`${API_URL}/dogData`);
    //     res.json(response.data);
    // } catch (err) {
    //     res.status(500).json({ message: 'Error fetching dogData' });
    // }
    res.sendFile(path.join(distPath, 'index.html'));
   
});

//serve registration page
app.get('/PuppyMarketPlace/signup',async(req,res)=>{
    //fine path res.send
    res.sendFile(path.join(distPath, 'index.html'));
   
})

// User registration endpoint
app.post('/PuppyMarketPlace/signup', async (req, res) => {
    const { firstName, lastName, username, sex, email, phone, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        // Logic to save user data to database
        console.log('User Data:', { firstName, lastName, username, sex, email, phone, password });

        //checking if user already exist in the database
        const checkResult=await db.query("SELECT * FROM users WHERE email = $1", [email])
        if (checkResult.rows.length > 0) {
            res.send("Email already exists. Try logging in.");
          }else{
            bcrypt.hash(password,saltRounds,async(err,hash)=>{
                if (err){
                    console.log("Error hashing password:",err);
                }else{
                    console.log("Hashed Password:",hash)
                    await db.query(
                        "INSERT INTO users(email,password,contact_info,username) VALUES ($1,$2,$3,$4)",
                        [email,hash,phone,username]
                    )
                }
            })
          }
        // Respond with success
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user' });
    }
});

//login endpoint
app.get('/PuppyMarketPlace/login',async(req,res)=>{
    res.sendFile(path.join(distPath, 'index.html'));
})

app.post('/PuppyMarketPlace/login',async(req,res)=>{

    const { email, password } = req.body;
    console.log('login data:', email, password);
    
    
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      //verifying the password
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          console.error("Error comparing passwords:", err);
        } else {
          if (result) {
            // res.render("secrets.ejs");
            return res.status(200).json({ message: 'Login successful' });
          } else {
            return res.status(400).json({ message: 'Incorrect password' });
          }
        }
      });
    } else {
        return res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error processing login' })
  }
})

//Dashboard
app.get("/user-dashboard",async(req,res)=>{
    if(req.isAuthenticated()){
        res.sendFile(path.join(distPath, 'index.html'));
    }else{
        res.redirect('/PuppyMarketPlace/login')
    }
})


//this is a local stratedgy that helps authenticate a user without having to login again 
//used to maintain a session
passport.use(new Strategy(async function verify(username,password,cb){

}))
app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});


