const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('combined'));

const port = 3000

// Import routes
const postRoutes = require('./routes/postRoutes');
app.use('/posts', postRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err);

    res.status(err.statusCode || 500).send({
        statusCode: err.statusCode || 500,
        message: err.message || 'Something went wrong!',
        errors :[]
    })
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/note-api', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => {
        console.log(err)
        console.log('MongoDB connection failed...')
        process.exit(1);
    }
);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})