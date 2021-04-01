//  Importing requirements.
const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');    //  Not needed in new versions of Express.
const mongoose = require('mongoose');

require('dotenv').config(); //  To have the 'environment variables' in the '.env' file.

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//  Creating Express Server
const app = express();
const PORT = process.env.PORT || 5000;

//  Connect to MongoDB database.
const URI = process.env.ATLAS_URI;
mongoose.connect(
    URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);
const connection = mongoose.connection;
//  'once' the 'connection' is 'open', Perform the arrow function. 
connection.once('open', () => {
    console.log(`MongoDB database connection sucessfully established.`);
})


//  Middlewares
app.use(cors());
app.use(express.json());    //  Originally >app.use(bodyParser.json());< but now is included in express.

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//  Function to start Server and listen to port no PORT.
app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}.`);
})