// app/controller/news.js
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const dataList = await ctx.service.news.list();
    await this.ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;

