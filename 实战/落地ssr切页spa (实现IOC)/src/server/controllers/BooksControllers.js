// const Books = require('../models/Books')
// const books = new Books()
const cheerio = require('cheerio')
const {
  route,
  GET
} = require('awilix-koa')

// controller
@route("/books")
class BooksControllers {
  // aop
  constructor({ booksService }) {
    // this.booksService = new booksService()
    console.log(booksService)
  }

  // action
  @route('/view')
  @GET()
  async actionView(ctx, next) {

    // 监测是否被 Pjax 代理
    if (ctx.request.header['x-pjax']) {
      const _html = await ctx.render('books/pages/view')
      const $ = cheerio.load(_html)
      const viewHtml = $('#books-view').html()
      return ctx.body = viewHtml
    }

    const res = await books.viewBooks(ctx)
    if (res.errorCode == 0) {
      return ctx.body = await ctx.render('books/pages/view', {
        ...res.data
      })
    }
  }

  @route('/index')
  @GET()
  async actionIndex(ctx, next) {
    console.log('进入请求')
    return ctx.body = 'hello world'
    const data = await books.getData(ctx.query)
    return ctx.body = await ctx.render('books/pages/index', {
      data
    })
  }

  @route('/create')
  @GET()
  async actionCreate(ctx, next) {
    if (ctx.request.header['x-pjax']) {
      const _html = await ctx.render('books/pages/create')
      const $ = cheerio.load(_html)
      let _createRes = $('.books-create').html()
      $(".lazyload-js").each(function () {
        const src = $(this).attr("src")
        _createRes += `<script src="${src}"></script>`
      })
      $(".lazyload-css").each(function () {
        const href = $(this).attr("href")
        _createRes += `<link rel="stylesheet" href="${href}">`
      })
      console.log(_createRes)
      return ctx.body = _createRes
    }


    if (ctx.method === 'GET') {
      return ctx.body = await ctx.render('books/pages/create')
    } else {
      const result = await books.createBooks(ctx.request.body)
      if (result) {
        return ctx.response.redirect('/books/index');
      } else {
        return ctx.body = await ctx.render('books/pages/index')
      }
    }
  }


  @route('/update')
  @GET()
  async actionUpdate(ctx, next) {
    const {
      method
    } = ctx
    const res = await books.updateBooks(ctx)
    if (method == 'GET') {
      if (res.errorCode == 0) {
        return ctx.body = await ctx.render('books/pages/update', {
          ...res.data
        })
      }
    } else if (method == 'POST') {
      if (res.errorCode == 0) {
        return ctx.response.redirect('/books/index');
      } else {
        return ctx.body = await ctx.render('/books/pages/update', {
          ...res.data
        })
      }
    }
  }


  @route('/delete')
  @GET()
  async actionDelete(ctx, next) {
    const res = await books.deleteBooks(ctx)
    if (res.errorCode == 0) {
      return ctx.response.redirect('/books/index');
    }
  }
}


module.exports = BooksControllers