const createControl = require('./Control')

describe('Control', () => {

    it('should handle 2d moves', () => {
        
        const point = [0, 0]
        const control = createControl(point)
        
        const expectations = [
            { up: [0,1] },
            { up: [0,2] },
            { up: [0,3] },
            { up: [0,4] },
            { right: [1,4] },
            { right: [2,4] },
            { right: [3,4] },
            { left: [2,4] },
            { down: [2,3] },
            { down: [2,2] },
        ]

        const guessPoint = (command, result) => {
            control[command]()
            expect(control.getPoint()).toEqual(result)
        }

        expectations.forEach(expected => {

            const [command_result_map] = Object.entries(expected)
            const [command, result] = command_result_map
            guessPoint(command, result)
        })
    })
})