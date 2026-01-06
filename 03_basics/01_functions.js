function sayMyName(){
    console.log("s")
    console.log("h")
    console.log("i")
    console.log("v")
    console.log("a")
    console.log("m")
}
//sayMyName()
function addTwoNumber(number1,nummber2){
    return number1 +nummber2;
}
const result=addTwoNumber(3,4)
console.log("result is: ",result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("shivam"))