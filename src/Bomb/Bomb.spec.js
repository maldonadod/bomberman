const createBomb = require('./Bomb')
const {
  BombDropedState
  ,BombExplodedState
} = require('./states')

describe('Bomb', () => {
  
  it('is created with state droped', () => {
    const bomb = createBomb()
    expect(bomb.getState()).toBe(BombDropedState)
  })
  
  it('invoking explode change state to exploded', () => {
    const bomb = createBomb()
    bomb.explode()
    expect(bomb.getState()).toBe(BombExplodedState)
  })
})