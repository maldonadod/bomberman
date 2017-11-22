const createBombPool = require('./BombPool')
const createBomb = require('../Bomb/Bomb')

describe('BombPool', () => {
  
	it('should spawn bombs', () => {

		const pool = createBombPool()

		const bomb = pool.spawn()
		expect(JSON.stringify(bomb)).toEqual(JSON.stringify(createBomb()))
		
		const bomb2 = pool.spawn()
		expect(bomb2).toEqual(undefined)
	})
})