//Immediately invoked function Expression 
(function chai(){
    console.log("DB CONNECTED");
})();  //we need to use semicolon if we want to write two IIFE

((name)=>{
    console.log(`DB connected two ${name}`)
})('shivam')