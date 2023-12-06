let login = prompt("Who's There ?");
if(login === "Admin"){
    let password = prompt("Enter the password");
    if (password=== "The Master"){
        alert("Welcome")
    }
    else if(password === "" || password === null){
        alert("Cancelled")
    }
    else{
        alert("Wrong Password")
    }
    
    }else if (login === "" || password === null){
        alert("Cancelled")
} 
else{
    alert("I don't Know you")
}