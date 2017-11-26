const createBomb = require('./Bomb')
const {
  BombDropedState
  ,BombExplodedState
} = require('./states')

const createBombTest = () => {
  const bomb = createBomb()
  expect(bomb.getState()).toBe(BombDropedState)
}

const explodeBombTest = () => {
  const bomb = createBomb()
  bomb.explode()
  expect(bomb.getState()).toBe(BombExplodedState)
}

module.exports = {
  createBombTest,
  explodeBombTest
}