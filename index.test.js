var sum = require('./index.js').sum

describe('testing of arithmetic function', ()=> {
    it('sums correctly', ()=> {
        const firstNum = 2;
        const secondNum = 3;
        const expected = 5;
    
        const actual = sum(firstNum, secondNum);
    
        expect(actual).toBe(expected)
    })
    })
    
    test('sums correctly', ()=> {
        const firstNum = 2;
        const secondNum = 3;
        const expected = 5;
    
        const actual = sum(firstNum, secondNum);
    
        expect(actual).toBe(expected)
    })
    