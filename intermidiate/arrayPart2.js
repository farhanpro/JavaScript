// function isEven(element) {
//     if(element%2 ===  0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(2));
var isEven =(element)=>{
    return element %2 === 0
};
// console.log(isEven(2));
// console.log(isEven(29));
// console.log(isEven(26));
var result =  [2,4,6,8,10].every((e)=>(e % 2 === 0))
console.log(result);