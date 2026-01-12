var username = "";
var password = "";

function register() {
    username = document.getElementById("regUser").value;
    password = document.getElementById("regPass").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
    } else {
        document.getElementById("msg").innerHTML = "Registration Successful!";
    }
}

function login() {
    var u = document.getElementById("loginUser").value;
    var p = document.getElementById("loginPass").value;

    if (u === username && p === password) {
        document.getElementById("msg").innerHTML = "Login Successful!";
    } else {
        document.getElementById("msg").innerHTML = "Invalid Login Details!";
    }
}
