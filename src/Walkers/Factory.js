const defaultStrategy = (point = [0,0]) => {

    return point
}

const WalkerFactory = ({point, strategy = defaultStrategy}) => {

    const current = strategy(point)

    return () => ({
        getPoint() {
            return current
        }
    })
}


module.exports = WalkerFactory