//Premitive
// 7 types:
// String
// Number
// Boolean
// null
// undefined
// Symbol
// bigint
const score=100
const isLogIn= true
const outsideTemp= null
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)
const bigNumber=123456789876n

//Reference (Non-Premitive)
// array
// objects
// functions
const arr = [1,2,3,4,5,6]
let myObj={
    name:"vikas",
    age:20,
}
const myFunction = function(){
    console.log("hello world")
}
console.log(person.age);