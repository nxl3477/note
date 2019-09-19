import './create.css'

const create = {
  init() {
    create.register()
  },
  register() {
    xtag.create('x-create', class extends XTagElement {
      constructor() {
        super()
        console.log('初始化操作')
        
      }

      "::template(true)"() {
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
              <button id="create-btn" type="submit" class="btn btn-primary">创建</button>
            </div>
          </form>
        `
      }

      "click::event"(e) {
        if(e.target.id == "create-btn") {
          console.log(this)
          // alert("请求")
        }
      }
    });
  }
}

export default create