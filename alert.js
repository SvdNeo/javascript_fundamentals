// alert("I'am Javascript");
// let name;
// let admin;
// name = "John";
// admin = name;
// alert(admin);
// const ourPlanetName = "Earth";
// alert(ourPlanetName);
// var currentUserName= "Sanjay";
// alert(currentUserName);
// // const BIRTHDAY = "27.10.2022"; 
// // const age = someCode(BIRTHDAY);

// let name1 = "Ilya";

// alert( `hello ${1}` ); // hello 1

// alert( `hello ${"name"}` ); // hello name

// alert( `hello ${name1}` ); // hello Ilya

// let fullName = prompt("What is Your full name","")
// alert(`My  full name is ${fullName}`)

// let isLunch = confirm("Had Your lunch?");

// alert( isLunch ); 

// 0, null, undefined, NaN, ""	 are all false

// operators
// let a = 1, b = 1;

// let c = ++a; // 2
// console.log(c)
// let d = b++; // 1
// console.log(d)

// let a1 = 2;

// let x = 1 + (a1 *= 2);
// console.log(a1)// 4
// console.log(x) // 5

// // type conversions
// console.log("" + 1 + 0); // "10"
// console.log("" - 1 + 0); // -1
// console.log(true + false); // 1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); //"9px"
// console.log("$" + 4 + 5); // "$45"
// console.log("4" - 2); //2
// console.log("4px" - 2); //NaN
// console.log("  -9  " + 5); // " -9  5"
// console.log("  -9  " - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(" \t \n" - 2); //-2

// //Fix the addition
// let m = +prompt("First number?",1);
// let n = +prompt("Second number?",2);
// alert(m+n);

//comparisons
console.log(5 > 4);//true
console.log("apple" > "pineapple"); // false 
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); //false
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n")//false

// conditional branching 
if (0) {
    console.log( 'Hello' );
  }
  // hello will be logged as it is a string not a number

let question = prompt("What is the “official” name of JavaScript?","");
 (question == "ECMAScript") ?  alert("Right!"): alert("You don’t know? ECMAScript!");

let number = +prompt("Enter a number");
 let output = (number >0) ? 1 :(number<0) ? -1 :0;
 alert(output);

 //Rewrite 'if' into '?'
 let res;

if (a + b < 4) {
  res = 'Below';
} else {
  res= 'Over';
}

 let result = (a + b < 4) ? "below" : "over"; // using ternary operator

 //Rewrite 'if..else' into '?'
 let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let mess = (login == 'Employee') ?  'Hello' : (login == 'Director') ? "Greetings" : (login == '') ? "No login" :"";

//Logical operators

alert( null || 2 || undefined );// returns 2 as OR operator returns first truthy value
alert( alert(1) || 2 || alert(3) );// returns 1 and then 2 i.e alert(1) pops out 1 but alert(alert(1)) is undefined hence it moves forward and returns 2 as its truthy value
alert(alert(1));// returns 1 and then undefined
alert( 1 && null && 2 );// returns null as AND looks for first falsy value
alert( alert(1) && alert(2) );// returns 1 and undefined 
alert( null || 2 && 3 || 4 ); // returns 3 as first 2&& 3 is evaluated and returns 3 later its resolved to null||3||4 hence it returns 3
//Write an if condition to check that age is between 14 and 90 inclusively.
if(age>=14 && age<=90);
//Write an if condition to check that age is NOT between 14 and 90 inclusively.Create two variants: the first one using NOT !, the second one – without it.
if(!(age>=14 && age<=90));
if(age<14 || age>90);

if (-1 || 0) alert( 'first' );// it runs as -1 is truthy 
if (-1 && 0) alert( 'second' );// it doesnt run , as && opeartor returns false value
if (null || -1 && 1) alert( 'third' );// it runs as if statement returns 1 which is a truthy value
 

