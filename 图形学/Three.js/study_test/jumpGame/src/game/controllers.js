import View from './view'
import Model from './model'
class Controllers {
  constructor() {
    this.view = new View()
    this.model = new Model()
  }

  actionIndex() {
    this.view.initGamePage()
  }
}


export default Controllers