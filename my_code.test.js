const { sum, inOneHour } = require('./my_code.js')

describe('Math functions', () => {
    beforeAll(() => {
        console.log('Before all')
    })
    beforeEach(() => {
        console.log('Before Each')
    })
    afterAll(() =>{
        console.log('After All')
    })
    afterEach(() =>{
        console.log('After Each')
    })

    it('sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(4)
    })
    it('sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
})

describe('Time functions', () => {
    it('returns the timestamp for one hour ahead', () => {
        const realDate = Date.now.bind(global.Date)
        global.Date.now = () => {return 0}
        expect(inOneHour()).toBe(3600000)
        global.Date.now = realDate
        console.log(global.Date.now())
    })
})