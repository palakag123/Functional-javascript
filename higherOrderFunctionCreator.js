let higherOrderFunction = (operation, num)=>{
    while(num!=0){
        return operation();
        num--;
    }
};
// function operation(){
//     console.log('hi')
// }
module.exports = higherOrderFunction;