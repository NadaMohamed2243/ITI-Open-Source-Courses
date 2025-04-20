const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('combined'));

const port = 3000

// Import routes
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/note-api', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected...'))
//     .catch(err => {
//         console.log(err)
//         console.log('MongoDB connection failed...')
//         process.exit(1);
//     }
// );

// Connect to MongoDB using environment variable (deployment)
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => {
        console.log(err)
        console.log('MongoDB connection failed...')
        process.exit(1);
    }
);

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err);

    res.status(err.statusCode || 500).send({
        statusCode: err.statusCode || 500,
        message: err.message || 'Something went wrong!',
        errors :[]
    })
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})