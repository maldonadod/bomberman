const {
  BombDropedState
  ,BombExplodedState
} = require('./states')

const ProtoBomb = {
  type: 'bomb'
  ,state: null
  ,getState() {
    return this.state
  }
  ,setState(state) {
    this.state = state
  }
  ,explode() {
    this.setState(BombExplodedState)
  }
}

const createBomb = () => {

  const bomb = Object.create(ProtoBomb)

  Object.assign(bomb, {
    state: BombDropedState
  })

  return bomb
}

module.exports = createBomb