// let login = prompt("Who's There ?");
// if(login === "Admin"){
//     let password = prompt("Enter the password");
//     if (password=== "The Master"){
//         alert("Welcome")
//     }
//     else if(password === "" || password === null){
//         alert("Cancelled")
//     }
//     else{
//         alert("Wrong Password")
//     }
    
//     }else if (login === "" || password === null){
//         alert("Cancelled")
// } 
// else{
//     alert("I don't Know you")
// }

// // Loops 
// let i = 3;

// while (i) {
//   alert( i-- );
// } 
// //last value is 1

// let y = 0;
// while (++y < 5) alert( y );
// here the output would be 1,2,3,4

// let x = 0;
// while (x++ < 5) alert( x );
//here the output is 1,2,3,4,5

// for (let i = 0; i < 5; i++) alert( i );
// outputs 0,1,2,3,4

// for (let i = 0; i < 5; ++i) alert( i );
//outputs 0,1,2,3,4

// for(let i =2; i<=10;i++){
//     if(i%2 ==0){
//         alert(i)
//     }
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

  // rewrite this by using while loop
//   let c= 0;
//   while (c<3){
    
//     alert( `number ${c}!` );
//     (c++);
//   }

// let number;
// do{
//     number = prompt("Enter a number greater than zero")
// } while(number<=100 && number)

let n = 10;

for (let i = 2; i <= n; i++) {
    let isPrime = true; // flag to check if i is prime

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break; // not a prime, break out of the inner loop
        }
    }

    if (isPrime) {
        console.log(i); // a prime
    }
}

// converting switch to if-else statement
// let browser = prompt("Enter the browser name")
// if(browser == "edge"){
//     alert( "You've got the Edge!" );
// }
// else if (browser == "chrome" || browser == "Firefox" || browser =="Safari"){
//     alert( 'Okay we support these browsers too' );
// }
// else{
//     alert( 'We hope that this page looks ok!' );
    
// }

//converting   if-else to switch statement
// let a = +prompt('a?', '');

// switch(a){
//     case 0:alert( 0 );
//     break;
//     case 1:alert( 1 );
//     break;
//     case 2 : case 3:alert( '2,3' );
//     break;
//     default:alert("Sorry")
// }

// let checkAged = age>18 ? true: confirm('Did parents allow you?');
// function checkAge(){
//     return (age>18) ? true: confirm('Did parents allow you?');
// }

// function min(d,f){
//     if(d<f){
//         return d
//     }
//     return f
//     }
// const minimum = (k,l) =>{if(k<l){return k}return l}

// const p = prompt("Enter first number");
// const h = prompt("Enter second number");

// function pow(p,h){
//   let res = p;
//   for(let i=1;i<h;i++){
//     res=res*p
//   }
//   return res
// }
// alert(pow(p,h));

// if (!isNaN(p) && !isNaN(h)) {
//     const result = Math.pow(p,h);
//     alert(`Result: ${p}^${h} = ${result}`);
// } else {
//     alert('Please enter valid numbers for base and exponent.');
// }


const ask = (question,yes,no)=>{
  if (confirm(question)) yes();

  else no();
}
ask(
  "Do you agree?",
  ()=> { alert("You agreed."); },
  ()=> { alert("You canceled the execution."); }
);
// use of callback function
// const func = ()=>{console.log("i have to complete learning JS")}
// setTimeout(func,5000);// here setTimeout takes 2 parameters i.e a function and time after which it should be executed

// const handleSubmit = ()=>{
//     let message = document.createElement("div")
//     message.innerText = "Submitted";
//     document.body.appendChild(message)
// }
// document.getElementById("submit").addEventListener("click",handleSubmit);
