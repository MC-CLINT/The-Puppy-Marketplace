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
import nodemailer from 'nodemailer';

const app=express();
const Port=process.env.Port||3000;
const API_URL="http://localhost:4000";
const __dirname = dirname(fileURLToPath(import.meta.url));
const corsOptions = {
    origin: 'http://localhost:5173',
};
const saltRounds=10;
env.config();
//configuration for nodemailer
const transporter = nodemailer.createTransport({
  service:"gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});


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
app.get('/', async(req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
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
        const all_users=await pool.query("SELECT * FROM users")
        console.log(all_users.rows)
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
                    try {
                      await pool.query(
                          "INSERT INTO users(email, password, contact_info, username) VALUES ($1, $2, $3, $4)",
                          [email, hash, phone, username]
                      );
                      console.log("User inserted successfully");
                  } catch (error) {
                      console.error("Error inserting user:", error.message);
                  }
                  
                   

                    //below is for generating and sending the verification code
                   
            const verificationCode = Math.floor(1000 + Math.random() * 9000);
          await pool.query("INSERT INTO verification_codes(email, code, expires_at) VALUES ($1, $2, NOW() + INTERVAL '1 hour')", [email, verificationCode]);
          
          const mailOptions = {
            from: process.env.USER_EMAIL,
            to: email,
            subject: 'Your verification code',
            text: `Your verification code is ${verificationCode}`
          };
          //supposed to continue with try catch below it
          try{
            await transporter.sendMail(mailOptions);
            res.json({success:true,message:'Verificaition code sent successfully'})
          }catch (error) {
            res.status(500).json({ success: false, message: 'Failed to send verification code.' });
          }
                }
            })
          }
     
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user' });
    }
});

//sending verification code to the user's email
// let verificationCodes={};

// app.post('/PuppyMarketPlace/sendVerificationCode',async(req,res)=>{
//   const {email}=req.body;
//   if(!email){
//     return res.sendStatus(400).json({success:false,message:'email is required'})
//   }
//   //This is to generate the verification code
//   const verificationCodes=Math.floor(1000+Math.random()*9000)

//   //Storing the verification code with the email as the key
//   verificationCodes[email]=verificationCode

//   //mail options
//   const mailOptions={
//     from:process.env.USER_EMAIL,
//     to:email,
//     subject:'Your verification code',
//     text:`Your verification code is ${verificationCode}`
//   }

//   //below is for sending the email
//   try{
//     await transporter.sendMail(mailOptions);
//     res.json({success:true,message:'Verificaition code sent successfully'})
//   }catch (error) {
//     res.status(500).json({ success: false, message: 'Failed to send verification code.' });
//   }
// })

app.get("/PuppyMarketPlace/signup/verifyEmail/Verified",async(req,res)=>{
  res.sendFile(path.join(distPath, 'index.html'));
})
app.get('/PuppyMarketPlace/signup/verifyEmail/Verified/user-dashboard',async(req,res)=>{
  res.sendFile(path.join(distPath, 'index.html'));
})

//login endpoint
app.get('/PuppyMarketPlace/login',async(req,res)=>{
    res.sendFile(path.join(distPath, 'index.html'));
})

app.get('/PuppyMarketPlace/signup/verifyEmail',async(req,res)=>{
  res.sendFile(path.join(distPath, 'index.html'));
})
app.post('/PuppyMarketPlace/signup/verifyEmail',async(req,res)=>{
  const { code,email } = req.body; // Destructure code from the request body
  console.log('Received code and email:', code,email);

  //


  try {
    // Check if the verification code is valid and not expired
    const result = await pool.query("SELECT * FROM verification_codes WHERE email = $1 AND code = $2 AND expires_at > NOW()", [email, code]);

    if (result.rows.length > 0) {
      // Verification code is valid, update user as verified
      await pool.query("UPDATE users SET verified = true WHERE email = $1", [email]);
      res.json({ success: true, message: 'Email verified successfully.' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid or expired verification code.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error verifying the code.' });
  }

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