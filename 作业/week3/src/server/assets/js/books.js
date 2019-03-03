const Books = xtag.create('x-books', class extends XTagElement {
  '::template(true)' (){
    return `
    <div class="row">
      <form class="form-inline" action="/books/index" method="get">
        <div class="form-group mb-2">
          <label for="inputPassword2" class="sr-only">书名</label>
          <input type="text" name="query" class="form-control" id="inputPassword2" >
        </div>
        <!-- <input name="_csrf" type="hidden" id="_csrf" value="<?= Yii::$app->request->csrfToken ?>"> -->
        <button type="submit" class="btn btn-primary mb-2">查询</button>
        <a href="/books/create" id="create_btn"  class="btn btn-success mb-2">新增</a>
      </form>
      <table class="table border">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">书名</th>
            <th scope="col">作者</th>
            <th scope="col">价格</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          {% for item in data %}
            <tr>
              <th scope="row">[[item.id]]</th>
              <td>[[item.name]]</td>
              <td>[[item.price]]</td>
              <td>[[item.auther]]</td>
              <td>
                <a class="btn btn-success" href="/books/view/[[ item.id ]]">查看</a>
                <a class="btn btn-success update_btn" href="/books/update/[[ item.id ]]">编辑</a>
                <a class="btn btn-danger"  href="/books/delete/[[ item.id ]]">删除</button>
              </td>
            </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
    `
  }
});

const BooksNode = new Books();
// Because the foo template indicated it was to be automatically rendered, its content is already present in your element instance.
export default BooksNode
// BooksNode.render();
