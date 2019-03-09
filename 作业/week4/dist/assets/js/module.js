"use strict";

class Create {
  constructor() {
    this.btn = document.querySelector('#test_btn');
  }

  fn() {
    this.btn.addEventListener('click', nxl.throttle(() => {
      console.log('按钮被点击');
    }, 300));
  }

} // const create = new Create()
// create.fn()
// export default Create