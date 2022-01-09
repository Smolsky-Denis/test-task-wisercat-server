
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const routes = require('./routes/routes');

const port = 3002;
const app = express();

const server = http.createServer(app);

// Use Node.js body parsing middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);


server.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});

