const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Contact = require('./models/Contact');

dotenv.config()

const app = express();
const port = process.env.PORT || 5500;
app.use(cors());
app.use(express.json());

app.use('/api/contacts', require('./routes/ContactRoutes'));

mongoose.connect(process.env.MONGO_URI).
    then(() => {
        console.log('Connected to MongoDB', process.env.MONGO_URI);
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});