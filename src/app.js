import express from 'express';
import db from './config/connection.js';
import books from './models/Book.js';
import routes from './routes/index.js';
// import 'express-async-errors';

const app = express();
routes(app);

app.put('/books/:id', (req, res) => {
  const index = findBook(req.params.id);
  res.json(books[index]);
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

const errorHandler = (err, req, res, next) => {
  res.status(500).json({ message: err.message});
}
app.use(errorHandler)
export default app;