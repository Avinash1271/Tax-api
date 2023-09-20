const express = require('express');
const app = express();
// const passport = require('passport');
const bodyParser = require('body-parser');
// const session = require('express-session');

// Set up middleware
app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


const connectDB = require("./config/database");
connectDB();



// API routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/protected', require('./routes/protected'));

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
