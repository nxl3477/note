import Game from './game/game'

class Main {
  constructor() {
    this.game = new Game()
  }
  init() {
    this.game.init()
  }
}

export default Main