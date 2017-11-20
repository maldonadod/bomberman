const createBomb = require('../Bomb/Bomb')
const createBombs = (capacity, bombs = []) => {

  if (capacity === 0) { return bombs }
  bombs.push({
    spawn: false,
    bomb: createBomb()
  })
  return createBombs(capacity - 1, bombs)
}
const createBombPool = capacity => {
  
  const bombs = createBombs(capacity)

  return {
    capacity
    ,bombs
  }
}

module.exports = createBombPool