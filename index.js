import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import todos from './controllers/todos';
import todo from './controllers/todo';
const bodyParser = require('body-parser');

const app = express();

//Middleware for CORS
app.use(cors());

// /*express.static is a built in middleware function to serve static files.
//  We are telling express server public folder is the place to look for the static files
// */
app.use(express.static(path.join(__dirname + '/client/dist/ngTodoList')));

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/client/dist/index.html')
});
// app.get('/', (req,res) => res.send('Invalid page'));

//Routing all HTTP requests to /todos to todos controller
app.use('/todos', todos);
app.use('/todo', todo);

const port = process.env.PORT || '3000';
app.set("port", port);


const server = http.createServer(app);
server.listen(port, () => console.log(`App listening on port ${port}!`));
