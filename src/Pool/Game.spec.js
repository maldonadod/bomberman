const {
    createBombTest,
    explodeBombTest
} = require('../Bomb/Bomb.specs')

const processSpec = ({spec, description}) => it(description, spec)

const createSpec = (description, spec) => ({
    description,
    spec
})

BombSpecs = [
    createSpec('we can create bombs', createBombTest)
    ,createSpec('it should explode (PUM)', explodeBombTest)
]

describe('Bomberman Specs', () => {

    describe.only('Bomb', () => {
        BombSpecs.forEach(processSpec)
    })
})