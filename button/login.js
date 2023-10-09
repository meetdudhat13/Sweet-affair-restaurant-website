let username = document.getElementById("username");
let password = document.getElementById("password");

let storeData= () =>{
    let input_username = localStorage.setItem("username",username.value);
    let input_password = localStorage.setItem("password",password.value);
    console.log(localStorage.key.username.value);
    console.log(localStorage.key.password.value);
}