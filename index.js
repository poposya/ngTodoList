import express from 'express';
import http from 'http';
import TodosService from './services/TodosService';

const app = express();

const todosService = new TodosService();

app.get('/getTodos', todosService.getTodos);
app.get('/getTodoById/:todoListId', todosService.getTodoById);
app.post('/saveTodoList', todosService.saveTodoList);
app.delete('/deleteTodoListById/:todoListId', todosService.deleteTodoListById);

const port = process.env.PORT || '3000';
app.set("port", port);


const server = http.createServer(app);
server.listen(port, () => console.log(`App listening on port ${port}!`));
