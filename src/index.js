const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
const cors = require('cors'); // <-- import cors


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(cors({
    origin: 'http://localhost:5173', // Vite dev server URL
    credentials: true, // if you need cookies/auth
}));

// If any request comes and route starts with /api, we map it to apiRouter
app.use('/api', apiRouter);


app.get('/ping', (req, res) => {
    return res.json({message: 'Problem Service is alive__0'});
});
app.get('/ci_ping', (req, res) => {
    return res.json({message: 'Problem ci is alive'});
});

// last middleware if any error comes
app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server started at PORT: ${PORT}`);
    await connectToDB();
    console.log("Successfully connected to db");
});
