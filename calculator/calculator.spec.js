const { add } = require('./calculator.js');

// test('test that truth is truth', () => {
// 	expect(true).toBe(true);
// });

// it('should text that true is true', () => {
// 	expect(true).toBe(true);
// });

describe('calculator.js', () => {
	describe('add() tests', () => {
		it('should return the sum of numbers passed', () => {
			expect(add(2, 2)).toBe(4);
			expect(add(2, 3)).toBe(5);
		});

		it('should return NaN when called with no arguments', () => {
			const expected = 0;
			const actual = add();
			expect(actual).toBe(expected);
		});

		it('should return 0 when called with no parameters', () => {
			expect(add()).toBe(0);
		});

		it('should return the value passed when only one argument is provided', () => {
			expect(add(1)).toBe(1);
		});

		it('should return the value passed when only one argument is provided', () => {
			expect(add(1, null)).toBe(1);
		});

		it('should handle any number of arguments, seperated by comm', () => {
			expect(add(1, 2, 3)).toBe(6);
			expect(add(1, 2, 3, 5)).toBe(11);
		});

		it('should handle an array of numbers', () => {
			expect(add(1, 2, 3)).toBe(6);
			expect(add(1, 2, 3, 5)).toBe(11);
		});
	});
});
