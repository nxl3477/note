const BooksCreate = xtag.create('x-insert', class extends XTagElement {
  '::template(true)' (){
    return `
      <form action="/books/create" method="post" >
        <div class="form-group">
          <label for="exampleFormControlInput1">书名</label>
          <input type="text" name="name" class="form-control" id="exampleFormControlInput1" placeholder="书名" >
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">作者</label>
          <input type="text" name="auther" class="form-control" id="exampleFormControlInput1" placeholder="作者">
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">价格</label>
          <input type="number" name="price" class="form-control" id="exampleFormControlInput1" placeholder="价格">
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">创建</button>
        </div>
      </form>
    `
  }
});

const BooksCreateNode = new BooksCreate();
// Because the foo template indicated it was to be automatically rendered, its content is already present in your element instance.
BooksCreateNode.render();
