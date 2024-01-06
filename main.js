document.addEventListener("DOMContentLoaded", function() {
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;
    
    let error = document.querySelector("#error");

    if(password != confirmPassword){
        error.textContent = "*Passwords do not match!*"
    }
    
    console.log("hi")
})