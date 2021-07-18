// require express
const express = require('express');

// require routes
// const { routes } = require('./routes/api');

const PORT = process.env.PORT || 3001;

// instantiate the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming json data
app.use(express.json());

// app.use(routes);

// connect mongoose when starting the app
const mongoose = require('mongoose');

// tell mongoose which database to connect to
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// log mongo queries being executed
mongoose.set('debug', true);

// chain listen() method onto our server
app.listen(PORT, () => {
    console.log(`API server on ${PORT}`);
});