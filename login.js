//Submit Button
function Verify() {
    var userRef = "IKBRYT";
    var passRef = "IKBRYT";
    var user =  document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef && pass == passRef) {
        alert("Welcome to  IKBRYT ");
        window.location.href = "home.html";
    } else {
        alert("Incorrect username or password!");
    }
};