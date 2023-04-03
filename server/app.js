const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Todo = require('./models/Todo');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.get('/api/todo', (req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(error => res.status(500).json({ error }));
});

app.post('/api/todo', (req, res) => {
  const newTodo = new Todo({
    text: req.body.text
  });

  newTodo.save()
    .then(todo => res.json(todo))
    .catch(error => res.status(500).json({ error }));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
