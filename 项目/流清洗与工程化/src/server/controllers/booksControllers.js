const Books = require('../models/Books')
const books = new Books()

class BooksControllers {
  constructor() {

  }


  actionView() {
    return async (ctx, next) => {
      const res = await books.viewBooks(ctx)
      if( res.errorCode == 0 ) {
        return ctx.body = await ctx.render('books/pages/view', { ...res.data })
      }
    }
  }


  actionIndex() {
    return async (ctx, next) => {
      const data = await books.getData(ctx.query)
      return ctx.body = await ctx.render('books/pages/index', { data })
    }
  }

  actionCreate() {
    return async (ctx, next) => {
      if( ctx.method === 'GET') {
        return ctx.body = await ctx.render('books/pages/create')
      }else {
        const result = await books.createBooks(ctx.request.body)
        if( result ) {
          return ctx.response.redirect('/books/pages/index');
        }else {
          return ctx.body = await ctx.render('books/pages/index')
        }
      }
    }
  }

  actionUpdate() {
    return async (ctx, next) => {
      const { method } = ctx
      const res = await books.updateBooks(ctx)
      if( method == 'GET' ) {
        if( res.errorCode == 0 ) {
          return ctx.body = await ctx.render('books/pages/update', { ...res.data })
        }
      }else if( method == 'POST' ) {
        if( res.errorCode == 0 ) {
          return ctx.response.redirect('/books/pages/index');
        }else {
          return ctx.body = await ctx.render('/books/pages/update', { ...res.data })
        }
      }
    }
  }



  actionDelete() {
    return async (ctx, next) => {
      const res = await books.deleteBooks(ctx)
      if( res.errorCode == 0 ) {
        return ctx.response.redirect('/books/pages/index');
      }
    }
  }
}


module.exports = BooksControllers