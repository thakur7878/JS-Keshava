//All the primitive values(like number,boolean) are stored in stack so they prefer call by value
//and all the non-primitives (like array ,object) are stored in heap so they call by reference
console.log("hare krsna")
let myYoutubename = "rajputShivam7878"
let anothername = myYoutubename
anothername = "let'sPlayFootbll"
console. log (myYoutubename) ; 
console. log (anothername);
let userOne = {
email: "user@google.com", 
upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "shivam@google.com"
console.log(userOne.email)
console.log(userTwo.email)