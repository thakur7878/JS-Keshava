let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(typeof myDate)
//console.log(myDate)
//let createdDate=new Date(2025,0,9)
let createdDate=new Date("01-09-2026")//there is a another to declare date

console.log(createdDate.toLocaleString());
let TimeStamp= Date.now();
console.log(TimeStamp)
console.log(createdDate.getTime());
console.log(Math.floor(Date.now()/1000))//to obtain the time in seconds
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday: "long"
})