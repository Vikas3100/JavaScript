// console.log('Hello to me');
// let a= 5;
// console.log(a);
// let age = 17;
// let status = (age>=18)?'can vote':'cannot vote';
// console.log(status);
// let num=4;
// switch(num){
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     break;
//     default : console.log('D');
// }
// for(let i=0; i<5;i++){
//     console.log(i);
// }
// let i=0;
// // while(i<5){
// //     console.log(i);
// //     i++;
// // }
// // DO-WHILE --> EXECUTE ATLEAST ONE TIME
// do{
//     console.log(i);
//     i++;
// }
// while(i<6);
// let rectangle = {
//     length:1,
//     breadth:2,
//     draw: function(){
//         console.log('draw');
//     }
// }
//factory function
// function createRectangle(length,breadth){
//     let rectangle = {
//     length: len,
//     breadth:bre,
//     // draw: function(){
//     //     console.log('draw');
//     // }
//     draw(){
//         console.log('draw');
//     }
// };
// return rectangle;
// }
// let rectangleObj1 = createRectangle(5,4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

//CONSTRUCTOR FUNCTION
// function Rectangle(){
//     this.length = 1;
//     this.breadth = 2;
//     this.draw = function(){
//         console.log('drawing');
//     }
// }
// let rectangleObject = new Rectangle();
// rectangleObject.color = 'yellow';
// console.log(rectangleObject); 
// delete rectangleObject.color;
// console.log(rectangleObject)


//for in-loop -->used on operator 

// let rectangle={
//     length:2,
//     breadth:3
// };
// // for(let key in rectangle){
// //     //keys are reflected through key 
// //     //values are reflected through rectangle[key]
// //     console.log(key,rectangle[key]);
// // }

// // for-of loop --> 
// for(let key of object.keys(rectangle)){
//     console.log(key);
// }


// -------------------------CLOning---------------
////Cloning through Iteration
let src = {a:10,b:20,c:30};
let dest = {};
for(let key in src){
    dest[key] = src[key];
}
console.log(dest);
// Cloning through Assignment
let desti = Object.assign({},src);
console.log(desti);
// assign
let destin = {...src};
console.log(destin);