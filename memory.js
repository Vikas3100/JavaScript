// Primitive-> stack
// Non-Primitive ->Heap
let myHomeName= "prince" 
let anotherName = myHomeName
anotherName = "Vikas"
console.log(myHomeName)
console.log(anotherName)

let userOne={
    email:"vikas@gmail.com",
    upi: "vikas@ybl"
}
let userTwo= userOne

userTwo.email = "Xikas@google.com"
console.log(userOne.email)
console.log(userTwo.email)