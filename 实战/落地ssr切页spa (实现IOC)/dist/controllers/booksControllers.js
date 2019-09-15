"use strict";

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

// const Books = require('../models/Books')
// const books = new Books()
const cheerio = require('cheerio');

const {
  route,
  GET
} = require('awilix-koa'); // controller


let BooksControllers = (_dec = route("/books"), _dec2 = route('/view'), _dec3 = GET(), _dec4 = route('/index'), _dec5 = GET(), _dec6 = route('/create'), _dec7 = GET(), _dec8 = route('/update'), _dec9 = GET(), _dec10 = route('/delete'), _dec11 = GET(), _dec(_class = (_class2 = class BooksControllers {
  // aop
  constructor({
    booksService
  }) {
    // this.booksService = new booksService()
    console.log(booksService);
  } // action


  async actionView(ctx, next) {
    // 监测是否被 Pjax 代理
    if (ctx.request.header['x-pjax']) {
      const _html = await ctx.render('books/pages/view');

      const $ = cheerio.load(_html);
      const viewHtml = $('#books-view').html();
      return ctx.body = viewHtml;
    }

    const res = await books.viewBooks(ctx);

    if (res.errorCode == 0) {
      return ctx.body = await ctx.render('books/pages/view', { ...res.data
      });
    }
  }

  async actionIndex(ctx, next) {
    console.log('进入请求');
    return ctx.body = 'hello world';
    const data = await books.getData(ctx.query);
    return ctx.body = await ctx.render('books/pages/index', {
      data
    });
  }

  async actionCreate(ctx, next) {
    if (ctx.request.header['x-pjax']) {
      const _html = await ctx.render('books/pages/create');

      const $ = cheerio.load(_html);

      let _createRes = $('.books-create').html();

      $(".lazyload-js").each(function () {
        const src = $(this).attr("src");
        _createRes += `<script src="${src}"></script>`;
      });
      $(".lazyload-css").each(function () {
        const href = $(this).attr("href");
        _createRes += `<link rel="stylesheet" href="${href}">`;
      });
      console.log(_createRes);
      return ctx.body = _createRes;
    }

    if (ctx.method === 'GET') {
      return ctx.body = await ctx.render('books/pages/create');
    } else {
      const result = await books.createBooks(ctx.request.body);

      if (result) {
        return ctx.response.redirect('/books/index');
      } else {
        return ctx.body = await ctx.render('books/pages/index');
      }
    }
  }

  async actionUpdate(ctx, next) {
    const {
      method
    } = ctx;
    const res = await books.updateBooks(ctx);

    if (method == 'GET') {
      if (res.errorCode == 0) {
        return ctx.body = await ctx.render('books/pages/update', { ...res.data
        });
      }
    } else if (method == 'POST') {
      if (res.errorCode == 0) {
        return ctx.response.redirect('/books/index');
      } else {
        return ctx.body = await ctx.render('/books/pages/update', { ...res.data
        });
      }
    }
  }

  async actionDelete(ctx, next) {
    const res = await books.deleteBooks(ctx);

    if (res.errorCode == 0) {
      return ctx.response.redirect('/books/index');
    }
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "actionView", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "actionView"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "actionIndex", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "actionIndex"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "actionCreate", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "actionCreate"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "actionUpdate", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "actionUpdate"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "actionDelete", [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "actionDelete"), _class2.prototype)), _class2)) || _class);
module.exports = BooksControllers;