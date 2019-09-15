import Controllers from './controllers'
class Game {
  constructor() {
    this.controller = new Controllers()
  }

  init() {
    this.controller.actionIndex()
  }
}

export default Game