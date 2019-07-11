import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';

const bodyParser = require('body-parser');
const api = require('./server/routes/api');

const app = express();

// Angular dist folder
app.use(express.static(path.join(__dirname + '/dist/ngTodoList')));

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const options = {
  origin: true,
  "Access-Control-Allow-Credentials": true,

  "Access-Control-Allow-Origin": true,
  "Access-Control-Allow-Headers": true,
  "Access-Control-Expose-Headers": true
};

//Middleware for CORS
app.use(cors(options));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API location
app.use('/api', api);

app.get('*', cors(options), (req, res, next) => {
  res.status(200).sendFile(__dirname + '/dist/ngTodoList/index.html')
  // next();
});


// PORT
const port = process.env.PORT || '3000';
app.set("port", port);

// Server
const server = http.createServer(app);
server.listen(port, () => console.log(`App listening on port ${port}!`));
