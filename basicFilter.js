let getShortMessage = (objectsArray=[])=>{
    return (objectsArray.filter((object) => (object.message.length < 50)).map((object)=>(object.message)));
};
// let result= getShortMessage([{message:'nwdnodiewiieruuuuuuubure rucriiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiirehcoejocjeocoiejcvoj'},
// {message: 'hhhhh'}, {message: 'l'}]);
// console.log (result);
module.exports = getShortMessage;