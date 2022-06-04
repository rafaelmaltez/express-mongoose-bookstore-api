import express from "express";
import booksRoute from './booksRoute.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send('Bookstore API')
  });
  app.use(
    express.json(),
    booksRoute
  )
}

export default routes;