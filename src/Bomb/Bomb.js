const {
  BombDropedState
  ,BombExplodedState
} = require('./states')

const ProtoBomb = {
  state: BombDropedState
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
const createBomb = () => Object.create(ProtoBomb)

module.exports = createBomb