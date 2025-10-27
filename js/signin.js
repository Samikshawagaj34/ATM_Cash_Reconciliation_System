document.getElementById("signinForm").addEventListener("submit", function(e){
    e.preventDefault(); // stop refreshing the page after the submit

    // Geting input values
    let inputUser = document.getElementById("username").value;
    let inputPass = document.getElementById("password").value;

    // Get stored values
    let storedUser = localStorage.getItem("username");
    let storedEmail = localStorage.getItem("email");
    let storedPass = localStorage.getItem("password");

    // Validation
    if((inputUser === storedUser || inputUser === storedEmail) && inputPass === storedPass){
        
        alert("Login Successful!!!");

        // CREATE SESSION FLAG
        localStorage.setItem("isLoggedIn", "true");

        // Redirect to homepage
        window.location.href = "../index.html";
    }
    else{
        alert("Invalid Username or Password!");
    }

});
