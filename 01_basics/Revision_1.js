const accountId=5784
let accountEmail="singh@google.com"
var account_password="109283"
accountCity="Gurugram"
//accountId=9   //This is not allowed
/*we never use var because of issue in block scope and functional scope*/
console.log(accountId)
accountEmail="shivam@google.com"
account_password="3445"
console.table([accountId,accountEmail,account_password,accountCity])