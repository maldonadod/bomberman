const createBombPool = require('../BombPool/BombPool')
const createBomb = require('../Bomb/Bomb')

const createBomberman = () => {

    const bombPool = createBombPool({maxSize: 1, factory: createBomb})

    return {
        dropBomb() {
            return bombPool.spawn()
        }
        ,plantBomb(Plantable) {
            Plantable.plant(0, 1, this.dropBomb())
        }
    }
}
module.exports = createBomberman