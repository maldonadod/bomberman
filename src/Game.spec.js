const {
    createBombTest,
    explodeBombTest
} = require('./Bomb/Bomb.specs')
const {
    createWalkerUponCellTest
    ,createWalkerBaseOnStrategyTest
} = require('./Walkers/Factory.specs')

const x_y_0_0 = [0,0]
const x_y_5_5 = [5,5]

const Strategy_x_y_0_0 = () => {
    return x_y_0_0
}
const Strategy_x_y_5_5 = () => {
    return x_y_5_5
}

const processSpec = ({spec, description}) => it(description, spec)

const createSpec = (description, spec) => ({
    description,
    spec
})

const BombSpecs = [
    createSpec('we can create bombs', createBombTest)
    ,createSpec('it should explode (PUM)', explodeBombTest)
]

const WalkerSpecs = [
    createSpec('create walker upon cell 0,0', createWalkerUponCellTest(x_y_0_0))
    ,createSpec('create walker upon cell 3,3', createWalkerUponCellTest([3,3]))
    ,createSpec('create walker based on a strategy', createWalkerBaseOnStrategyTest(Strategy_x_y_5_5, x_y_5_5))
    
]

describe('Bomberman Specs', () => {

    describe.only('Bomb', () => {
        BombSpecs.forEach(processSpec)
    })

    describe.only('Walkers', () => {
        WalkerSpecs.forEach(processSpec)
    })
})