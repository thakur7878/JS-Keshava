const user = {
    username: "shivam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Rao"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "shivam"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "shivam"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Singh"
    console.log(`hi this is ${username}`);//"this" doesn't work here
}


 chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "shivam"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()