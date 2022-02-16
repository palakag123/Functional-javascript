const filterFunction = require('../basicFilter.js');
describe('filter message to those with below 50 characters', function(){
    it('should return array of message with characters below 50', function(){
        const filteredArray = filterFunction([{message:'nwdnodiewiieruuuuuuubure rucriiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiirehcoejocjeocoiejcvoj'},
        {message: 'hhhhh'}, {message: 'l'}]);
        expect(filteredArray).toStrictEqual([ 'hhhhh', 'l' ]);
    });
    it('should consider empty array when no input given', function(){
        const filteredArray = filterFunction();
        expect(filteredArray).toStrictEqual([]);
    });
});