document.getElementById("signupform").addEventListener("submit", function(e){
e.preventDefault(); // Stops page refresh after submitting

    // Geting input values according to the signup page
    let fullName = document.getElementById("fullname").value;
    let empId = document.getElementById("empid").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let role = document.getElementById("role").value;
    let branch = document.getElementById("branch").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirm_password").value;

    // Checking password == confirm password
    if(password !== confirmPass){
        alert("Passwords do not match!");
        return;
    }
    //  Store registered data in localStorage
    localStorage.setItem("fullName", fullName);      
    localStorage.setItem("empId", empId);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("role", role);
    localStorage.setItem("branch", branch);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account Created Successfully!!!");

    // Redirecting to Sign In page
    window.location.href = "signin.html";
});
