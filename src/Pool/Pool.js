const getSource = (src) => {
    return function *source() {
        while(true) {
            yield src.pop()
        }
    }
}

const createPool = ({maxSize, factory}) => {

    const src = []
    
    while(maxSize > 0) {
        const obj = factory()
        src.push(obj)
        maxSize -= 1
    }

    const it = getSource(src)()

    return {
        spawn() {
            const res = it.next()
            return res.value
        }
        ,release(obj) {
            src.push(obj)
        }
    }
}
module.exports = createPool