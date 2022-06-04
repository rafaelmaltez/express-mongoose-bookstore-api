import express from 'express';

const app = express();

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

export default app;