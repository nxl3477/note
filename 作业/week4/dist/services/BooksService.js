"use strict";

/**
 * @fileoverview 实现Book的数据模型
 * @author nixiaolei@nxl3477@foxmail.com
 */
const {
  get,
  post
} = require('../utils/requestPromise');
/**
 *  Books类 获取后台关于图书相关的数据类
 *
 * @class Books
 */


class BooksService {
  /**
   * 
   * @param {Object} app KOA2的执行上下文 
   * @memberof Books
   */
  constructor(app) {}
  /**
   *  查看指定的书籍信息
   * @param {Object} ctx 传入 KOA2 的上下文环境
   * @example
   * return Array
   * viewBooks(ctx)
   * @memberof Books
   * 
   */


  async viewBooks(ctx) {
    const {
      method,
      params: {
        id
      }
    } = ctx;
    const data = await get(`view&id=${id}`);
    return data;
  }
  /**
   *
   * 查询并获取后台图书数据的方法
   * @param {String} {query} auther || name 的查询字段
   * @memberof Books
   * @example
   * return Array
   * getData({query})
   */


  async getData({
    query
  }) {
    if (query) {
      const data = await post('index', {
        query
      });
      return data.data;
    }

    const data = await get('index');
    return data.data;
  }
  /**
   *
   *  创建新的书籍
   * @param {Object} {name,auther,price} 必备的 名称， 作者 价格字段
   * @example
   * return Boolean
   * createBooks({ name, auther, price })
   * @memberof Books
   */


  async createBooks({
    name,
    auther,
    price
  }) {
    if (name == undefined || auther == undefined || price == undefined) {
      return false;
    } else {
      const data = await post('create', {
        name,
        auther,
        price
      });
      return data.errorCode == 0;
    }
  }
  /**
   *
   *  编辑书籍
   * @param {Obejct} ctx 传入 KOA2 的上下文
   * @example
   * return Object
   * updateBooks(ctx)
   * @memberof Books
   */


  async updateBooks(ctx) {
    const {
      method,
      params: {
        id
      }
    } = ctx;

    if (method == 'GET') {
      const data = await get(`update&id=${id}`);
      return data;
    } else if (method == 'POST') {
      const {
        id,
        name,
        auther,
        price
      } = ctx.request.body;
      const data = await post(`update&id=${id}`, {
        id,
        name,
        auther,
        price
      });
      return data;
    }
  }
  /**
   * 删除书籍
   *
   * @param {Object} ctx 传入 KOA2 的上下文
   * @example
   * return Object
   * deleteBooks(ctx)
   * @memberof Books
   */


  async deleteBooks(ctx) {
    const {
      method,
      params: {
        id
      }
    } = ctx;

    if (method == 'GET') {
      const data = await get(`delete&id=${id}`);
      return data;
    }
  }

}

module.exports = BooksService;