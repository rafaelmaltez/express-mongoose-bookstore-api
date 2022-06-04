import books from "../models/Book.js";
import 'express-async-errors';

class BookController {
  static getAllBooks = async (req, res) => {
    const result = await books.find();
    res.status(200).json(result);
  }

  static createBook = async (req, res) => {
      const book = await books.create(req.body)
      res.status(200).json(book);
  }
}

export default BookController;