const Router = require('koa-router');
const router = new Router();

const BooksControllers = require('./booksControllers')
const booksControllers = new BooksControllers()

module.exports = (app) => {
  router
    .get('/books/index', booksControllers.actionIndex())

    .get('/books/view/:id', booksControllers.actionView())

    .get('/books/create', booksControllers.actionCreate())
    .post('/books/create', booksControllers.actionCreate())

    .get('/books/update/:id', booksControllers.actionUpdate())
    .post('/books/update', booksControllers.actionUpdate())

    .get('/books/delete/:id', booksControllers.actionDelete())



  app
  .use(router.routes())
  .use(router.allowedMethods());
}