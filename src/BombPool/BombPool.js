const createPool = require('../Pool/Pool')
const createBomb = require('../Bomb/Bomb')

const createBombPool = () => {

    return createPool({maxSize: 1, factory: createBomb})
}
module.exports = createBombPool