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
 