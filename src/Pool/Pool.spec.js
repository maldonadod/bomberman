const createPool = require('./Pool')
const createObject = () => ({})

describe('Pool', () => {

    it('should create an object calling the factory when calling spawn', () => {
        const factory = jest.fn(() => ({}))
        const pool = createPool({
            maxSize: 1,
            factory
        })
        expect(pool.spawn()).toEqual({})
        expect(factory.mock.calls.length).toEqual(1)
    })
    it('should return as many reusables as maxSize allowed', () => {
        const factory = jest.fn(createObject)
        const pool = createPool({maxSize: 1, factory})
        const reusable = pool.spawn()
        const reusable2 = pool.spawn()
        expect(reusable).toEqual(createObject())
        expect(reusable2).toEqual(undefined)
    })
    it('should push back the obj to pool when we call to release', () => {
        const factory = jest.fn(createObject)
        const pool = createPool({maxSize: 1, factory})

        const reusable = pool.spawn()
        expect(reusable).toEqual(createObject())
        
        const reusable2 = pool.spawn()
        expect(reusable2).toEqual(undefined)

        pool.release(reusable)

        const reusable3 = pool.spawn()
        expect(reusable3).toBe(reusable)

        const reusable4 = pool.spawn()
        expect(reusable4).toEqual(undefined)
    })
})