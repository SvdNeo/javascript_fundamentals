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

let number;
do{
    number = prompt("Enter a number greater than zero")
} while(number<=100 && number)

