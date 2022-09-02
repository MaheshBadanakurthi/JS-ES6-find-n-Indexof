//  find method
let obj=[{fruit:"apples",quantity:3},
{fruit:"cherries",quantity:6},
{fruit:"banana",quantity:2},
{fruit:"grapes",quantity:4}];
console.log(obj.find(({fruit})=>fruit==='banana')); // using arrow function for find

// console.log(obj.findIndex(({fruit})=>fruit==='banana'));   arrow function with findIndex
// bellow is normal way to find 

// function fru(value){
//     return value.fruit==="banana";
// }
// console.log(obj.findIndex(fru)); // here we are calling hte function
  
