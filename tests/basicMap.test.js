const doubleFunction = require('../basicMap.js');
describe('doubleAll function that doubles input', function(){
    it('should return double of input array', function(){
        const doubleValue = doubleFunction([2, 3, 4]);
        expect(doubleValue).toStrictEqual([4,6,8]);
    });
    it('should consider empty array when no input given', function(){
        const doubleValue = doubleFunction();
        expect(doubleValue).toStrictEqual([]);
    });
    it('should throw wrong input when non array input given', function(){
        expect(()=>doubleFunction('hi')).toThrow('Input is not an array');
    });
});