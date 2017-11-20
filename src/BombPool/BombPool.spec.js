const createBombPool = require('./BombPool')

describe('BombPool', () => {
  
  it('should create a pool of capacity 1', () => {
    const pool = createBombPool(1)
    expect(pool.capacity).toEqual(1)
  })
  it('should create as many bombs as capacity', () => {
    const pool = createBombPool(1)
    expect(pool.bombs.length).toEqual(1)
    
    const pool3 = createBombPool(3)
    expect(pool3.bombs.length).toEqual(3)
  })
  it('should create as many bombs as capacity', () => {
    const pool = createBombPool(1)
    expect(pool.bombs.length).toEqual(1)
    
  })
})