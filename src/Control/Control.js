const createControl = point => {

    let [x, y] = point

    const up = () => {
        y++
    }, right = () => {
        x++
    }, down = () => {
        y--
    }, left = () => {
        x--
    };

    const getPoint = () => [x, y]

    return {
        up, right, down, left, getPoint
    }
}

module.exports = createControl