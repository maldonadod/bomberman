const createBomb = require('../Bomb/Bomb')
const createBomberman = require('./Bomberman')

describe('Bomberman', () => {
  
	it('can drop bombs', () => {
		const bomb = createBomb()
		const bomberman = createBomberman()
		const dropedBomb = bomberman.dropBomb()
		
		expect(JSON.stringify(dropedBomb)).toEqual(JSON.stringify(bomb))
	})

	it('can plant bombs in a plantable field', () => {
		
		const bomberman = createBomberman()
		const [x, y] = [0, 1]
		const field = {
			map: [
				[0,0,0],
				[0,0,0],
				[0,0,0]
			]
			,plant(x, y, plantable) {
				this.map[x][y] = plantable
			}
		}
		expect(field.map[x][y]).toEqual(0)
		bomberman.plantBomb(field)
		expect(field.map[x][y].type).toEqual('bomb')
	})
})