console.log("hare krsna")
const name = "shivam"
const repoCount = 10
//console.log(name +repoCount+"value")  //this is not recommended at all

// Strings Interpolation.. using `` (backticks) and ${} for inserting variables' 
// values (ALSO CALLED TEMPLATE LITERALS)
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//we can also use methods to format the variables inserted
console.log(`hello my name is ${name.toUpperCase()}`)
const SquadronName = new String('Majumdaar')
console.log(SquadronName[0]);
console.log(SquadronName.__proto__);
console.log(SquadronName.length);
console.log(SquadronName.toUpperCase());
console.log(SquadronName.charAt(2));
console.log(SquadronName.indexOf('a'));
const NewString = SquadronName.substring(0, 5)//It will print the string from 0 to 4
console.log(NewString);
const StringOne = SquadronName.slice(0, 5)
console.log(StringOne);
const newStringOne = "   shivam   "
console.log(newStringOne);
console.log(newStringOne.trim());// the method trim() remove the spaces in a string
const url = "https://shivam.com/shivam%20singh";
console.log(url.replace('%20', '-'));
console.log(url.includes('rajput'));//it will check if this particular string is a part of the URl or not
