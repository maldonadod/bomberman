const WalkerFactory = require('./Factory')

const createWalkerUponCellTest = point => {
    return () => {
        const createWalker = WalkerFactory({
            point
        })
        const walker = createWalker()
        expect(walker.getPoint()).toEqual(point)
    }
}

const createWalkerBaseOnStrategyTest = (strategy, point) => {

    return () => {
        const strategy_mock = jest.fn(strategy)
        const createWalker = WalkerFactory({
            strategy: strategy_mock
        })
        const walker = createWalker()
        expect(strategy_mock.mock.calls.length).toEqual(1)
        expect(walker.getPoint()).toEqual(point)
    }
}

module.exports = {
    createWalkerUponCellTest
    ,createWalkerBaseOnStrategyTest
}