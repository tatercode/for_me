const express = require('express');
const app = express();
const port = 3000
const Todo = require('./models/todo')

app.use(express.json())

let todos = []; // temp storage

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = new Todo(todos.length + 1, req.body.text, req.body.completed)
  todos.push(newTodo);
  res.status(201).json(newTodo);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

