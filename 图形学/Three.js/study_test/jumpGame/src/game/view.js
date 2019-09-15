import GamePage from '../pages/game-page'
class View {
  constructor() {
    this.gamePage = new GamePage()
  }

  initGamePage() {
    this.gamePage.init()
  }
}

export default View