// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Server variables
const rootPath = path.normalize(__dirname + './../');
const appDir = path.normalize(rootPath + '/src/dist/');
const port = 8015;
const app = express();

// Express app configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(appDir));

// Route to AngularJS App
app.get('*', (req, res) => {
    res.sendFile(appDir + 'index.html');
});

// Server launch
console.log('Listening on port:' + port);
console.log('http://localhost:' + port);
