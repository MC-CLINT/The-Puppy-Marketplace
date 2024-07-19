
//  'C:\Users\agbog\Desktop\Puppy Marketplace\The-Puppy-MarketplaceAdminside\my-app\src\index.js'

import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from 'path';
import cors from 'cors';

const app = express();
const Port = 8000;
const API_URL = "http://localhost:4000";
const __dirname = dirname(fileURLToPath(import.meta.url));

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

// Handle admin login POST request
app.post('/admin/login', (req, res) => {
    const { fullName, email, passWord } = req.body;
    
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', passWord);
    res.status(200).json({ message: 'Login successful' });
    
});

app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});
