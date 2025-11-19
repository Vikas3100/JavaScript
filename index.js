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
// let src = {a:10,b:20,c:30};
// let dest = {};
// for(let key in src){
//     dest[key] = src[key];
// }
// console.log(dest);
// // Cloning through Assignment
// let desti = Object.assign({},src);
// console.log(desti);
// //  clonning through assign 
// let destin = {...src};

// ---------------In-build library-----------
// console.log(destin);   
// let lastName='Vikas';
// let firstName = new String('Yadav')
// console.log(lastName.length);
// let msg = `this is 
// my 
// first
// message
// `;
// console.log(msg, msg.split = ' ');
// let date = new Date('January 31 2004 07:45');
// let date2 = new Date(2004, 5 , 12, 7)
// console.log(date);
// console.log(date2);
// -------------------------ARRAYS------------------
// let num = [1,4,6,8,9];
// num.push(1);
// num.unshift(8);
// num.splice(2,0,'a','b','c');// (start,delete, insert)
// console.log(num);
// console.log(num.indexOf('a'))
// let courses = [
//     {no:1, name:'Vikas'},
//     {no:2, name:'Xikas'}
// ]
// console.log(courses);
// console.log(courses.length);
// let course = courses.find(function(course){
//         return course.name == 'Vikas';
// })
// ---------------Arrow function -----------------
// let course = courses.find(course =>course.name ==='Xikas');
// console.log(course)
// -------------------Removing---------------
// let nums = [1,2,3,4,5,6,7];
// nums.pop();
// nums.shift();
// nums.splice(2,1);
// console.log(nums)
// ---------------------EMPTY----------------
let numbers = [1,2,56,4,85,6,7]
let nums = numbers;
numbers.length = 0;
console.log(nums)
console.log(numbers)
numbers.splice(0,numbers.length);
