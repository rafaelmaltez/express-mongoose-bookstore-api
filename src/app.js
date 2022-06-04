import express from 'express';
import db from './config/connection.js';

const app = express();
app.use(express.json());

const books = [
  { id: 1, title: 'Lord of the rings'},
  { id: 2, title: 'The Hobbit'}
]

app.get('/', (req, res) => {
  res.status(200).send('Bookstore API')
});

app.get('/books', (req, res) => {
  res.status(200).json(books);
})

app.put('/books/:id', (req, res) => {
  const index = findBook(req.params.id);
  res.json(books[index]);
})

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).json({ message: 'Books successfully inserted'})
})

app.put('/books/:id', (req, res) => {
  const index = findBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
})

app.delete('/books/:id', (req, res) => {
  const index = findBook(req.params.id);
  books.splice(index, 1);
  res.json({ message: `Book of id:${id} successfully removed`});
})

function findBook(id) {
  return books.findIndex((book) => book.id == id);
}

export default app;