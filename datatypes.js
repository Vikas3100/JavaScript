// "use strict";   // treat all JS code as newer version
// // alert(2+3);
// console.log(3+3);
// let name= "VIKAS";
// let age= 22;
// let isLoggedin = true;
// //number
// //bigint
// //string
// //boolean
// //null->standalone value
// // undefined
// // symbol=> unique

// // object 
// console.log(typeof("Vikas"))
// console.log(typeof undefined) //undefined
// console.log(typeof null)    //object
// let a=10;
// function inc(a){ //yahan pr a ki copy banegi 
//     a++;
// }
// inc(a);
// console.log(a); // yahan pr a=10 hi hoga no changes
let a= {value:10};
function inc(a){
    a.value++;
}
inc(a);
console.log(a);