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
import GoogleStratedgy from "passport-google-oauth2";
import env from "dotenv";
import { profile } from 'console';

const app=express();
const Port=process.env.Port;
const API_URL="http://localhost:4000";
const __dirname = dirname(fileURLToPath(import.meta.url));
const corsOptions = {
    origin: 'http://localhost:5173',
};
const saltRounds=5;
env.config();

// const db = new pg.Client({
//     user: process.env.PG_USER,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT,
//   });
//   db.connect();
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})


  const distPath = path.join(__dirname, '..', 'Puppy_marketplace', 'dist');
console.log(distPath)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions))
app.use(express.static(distPath));
app.use(session({
    secret:process.env.SESSION_SECRET,
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

//testing for vercel
app.get('*', (req, res) => {
  res.redirect('/PuppyMarketPlace');
});

//serve the Homepage when the webapp opens
app.get('/PuppyMarketPlace', async (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

//serve registration page
app.get('/PuppyMarketPlace/signup',async(req,res)=>{
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
        const checkResult=await pool.query("SELECT * FROM users WHERE email = $1",[email])
        if (checkResult.rows.length > 0) {
            res.send("Email already exists. Try logging in.");
          }else{
            bcrypt.hash(password,saltRounds,async(err,hash)=>{
                if (err){
                    console.log("Error hashing password:",err);
                }else{
                    console.log("Hashed Password:",hash)
                    await pool.query(
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
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
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



app.get("/auth/google/",passport.authenticate("google",{
    scope:["profile","email"],
}))

app.get("/auth/google/user-dashboard",passport.authenticate("google",{
    successRedirect:"/user-dashboard",
    failureRedirect:"/PuppyMarketPlace/login"
}))
//this is a local stratedgy that helps authenticate a user without having to login again 
//used to maintain a session. do again later
// passport.use(new Strategy(async function verify(username,password,cb){
// }))
    //Google stratedgy
passport.use("google",new GoogleStratedgy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/user-dashboard",
    userProfileURL: "https://www.googleapis.com/oauth2/v1/certs",
},async(accessToken, refreshToken, profile, cb)=>{
console.log(profile)
try{
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
        profile.email,
      ]);
      if(result.rows.length==0){
        const newUser=await pool.query(
            "INSERT INTO users (username,email,password) VALUES ($1,$2,$3)",
            [profile.given_name,profile.email,"google"]
        )
        cb(null,newUser.rows[0])
      }else{
        //user already exists
        cb(null,result.rows[0])
      }
}catch(err){
    cb(err)
}
}))
//loggin out

passport.serializeUser((user, cb) => {
    cb(null, user);
  });
  
  passport.deserializeUser((user, cb) => {
    cb(null, user);
  });

app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});