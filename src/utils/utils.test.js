import {  randomUniqueNumbers, generateNumbers } from './index'

describe('text utils', () => {
    it('test randomUniqueNumber method', () =>{
        expect(parseInt(randomUniqueNumbers({}))).toBeGreaterThan(10000000)
    })
    it(' test generateNumbers method', () => {
        expect(typeof(generateNumbers(10))).toEqual('object')
    })
    it(' test generateNumbers method', () => {
        expect(typeof(generateNumbers(100000))).toEqual('object')
    })
})