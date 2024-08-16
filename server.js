
import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from 'path';
import cors from 'cors';
import pg from 'pg';
import { body, validationResult } from 'express-validator';

// Constants and app initialization
const app = express();
const Port = 8000;
const API_URL = "http://localhost:4000";
const __dirname = dirname(fileURLToPath(import.meta.url));

// Database connection
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    password: "@chim0t@",
    database: "PuppyMarketPlace",
    port: 5000,
});
db.connect();

// Middleware and utility function
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const handleDatabaseError = (error, res) => {
  console.error("Database error:", error);
  res.status(500).json({ message: "Internal server error" });
};

const isAuthenticated = (req, res, next) => {
  // Implement your authentication logic here like check for a valid JWT token--ps--i dont know which one youll use
  //cant ask you cos its 3am right now
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: "Forbidden: Admin access required" });
  }
  next();
};

function logger(req, res, next) {
    console.log("Request method:", req.method);
    console.log('Request URL:', req.url);
    next();
}

// App configuration
app.use(express.static(path.join(__dirname, 'Adminside/my-app/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger);

// Route definitions

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

app.get('/admin/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'Adminside/my-app/build', 'index.html'));
});

app.get('/register', async(req, res) => {
    res.sendFile(path.join(__dirname, 'Adminside/my-app/build', 'index.html'));
});

app.post('/register', [
  body('fullName').notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('passWord').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { fullName, email, passWord } = req.body;
    const result = await db.query(
      'INSERT INTO Users (Username, email, password) VALUES ($1, $2, $3) RETURNING user_id',
      [fullName, email, passWord]
    );
    res.status(201).json({ message: "User registered successfully", userId: result.rows[0].user_id });
  } catch (error) {
    if (error.constraint === 'users_email_key') {
      return res.status(409).json({ message: "Email already in use" });
    }
    handleDatabaseError(error, res);
  }
});

app.post('/api/puppies', [
  isAuthenticated,
  body('breed').notEmpty().withMessage('Breed is required'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
  body('imageUrl').isURL().withMessage('Invalid image URL'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { breed, price, imageUrl } = req.body;
    const userId = req.user.id; // Assuming user ID is available from authentication
    const result = await db.query(
      'INSERT INTO Puppies (breed, price, image_url, created_by) VALUES ($1, $2, $3, $4) RETURNING puppy_id',
      [breed, price, imageUrl, userId]
    );
    const puppyId = result.rows[0].puppy_id;
    await db.query(
      'INSERT INTO PuppyListings (puppy_id, seller_id) VALUES ($1, $2)',
      [puppyId, userId]
    );
    res.status(201).json({ message: "Puppy listing created successfully", puppyId });
  } catch (error) {
    handleDatabaseError(error, res);
  }
});

app.post('/api/messages', [
  isAuthenticated,
  body('receiverId').isInt().withMessage('Invalid receiver ID'),
  body('content').notEmpty().withMessage('Message content is required'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { receiverId, content } = req.body;
    const senderId = req.user.id; // Assuming user ID is available from authentication
    const result = await db.query(
      'INSERT INTO Messages (sender_id, receiver_id, content) VALUES ($1, $2, $3) RETURNING message_id',
      [senderId, receiverId, content]
    );
    res.status(201).json({ message: "Message sent successfully", messageId: result.rows[0].message_id });
  } catch (error) {
    handleDatabaseError(error, res);
  }
});

app.post('/api/reviews', [
  isAuthenticated,
  body('reviewedId').isInt().withMessage('Invalid reviewed user ID'),
  body('puppyId').isInt().withMessage('Invalid puppy ID'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  body('comment').notEmpty().withMessage('Review comment is required'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { reviewedId, puppyId, rating, comment } = req.body;
    const reviewerId = req.user.id; // Assuming user ID is available from authentication
    const result = await db.query(
      'INSERT INTO Reviews (reviewer_id, reviewed_id, puppy_id, rating, comment) VALUES ($1, $2, $3, $4, $5) RETURNING review_id',
      [reviewerId, reviewedId, puppyId, rating, comment]
    );
    res.status(201).json({ message: "Review submitted successfully", reviewId: result.rows[0].review_id });
  } catch (error) {
    handleDatabaseError(error, res);
  }
});

app.post('/api/admin/actions', [
  isAuthenticated,
  isAdmin,
  body('userId').isInt().withMessage('Invalid user ID'),
  body('actionType').notEmpty().withMessage('Action type is required'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { userId, actionType } = req.body;
    const adminId = req.user.id; // Assuming user ID is available from authentication
    const result = await db.query(
      'INSERT INTO AdminActions (admin_id, user_id, action_type) VALUES ($1, $2, $3) RETURNING action_id',
      [adminId, userId, actionType]
    );
    res.status(201).json({ message: "Admin action recorded successfully", actionId: result.rows[0].action_id });
  } catch (error) {
    handleDatabaseError(error, res);
  }
});


app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});