//array
const myArr=[0,1,2,3,4]
const Warriors=["Arjun","Satyaki","Shwet"]
const myArr2=new Array(1,2,3,4)
//console.log(myArr[1]);
myArr.push(6);   //adds element to the last index
//console.log(myArr)
myArr.pop();     //remove element from last index
//console.log(myArr)
myArr.unshift(9);    //insert element at the starting index
//console.log(myArr)
myArr.shift()
//console.log(myArr)
//myArr.shift();      //remove element from starting index
//console.log(myArr)
//console.log(myArr.includes(9));    //includes method checks if a particular element is present in te array or not
//console.log(myArr.indexOf(2))      //returns the index of  element in array
const newArr=myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr);    //returns string
//Slice ,Splice
console.log("A ",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)
const myn2=myArr.splice(1,4);       //this changes the original array
console.log(myn2)
console.log(myArr)

