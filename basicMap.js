let doubleAll = (numbers=[]) => {
    if (!numbers.isArray){
        throw new Error ('Input is not an array');
    }
    return numbers.map(number=>number*2);};
module.exports = doubleAll;