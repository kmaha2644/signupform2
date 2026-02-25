function validateForm() {
    let username =
    document.getElementById("username").Value;
    
    let password =
    document.getElementById("password").Value;

    let confirmpassword =
    document.getElementById("confirmpassword").Value;

    let email =
    document.getElementById("email").Value;

    let firstName =
    document.getElementById("firstName").Value;

    let lastName =
    document.getElementById("lastName").Value;

    let terms =
    document.getElementById("terms").Value;

    let error =
    document.getElementById("errorMsg").Value;

    if(
        username === "" ||
        password === "" || confirmpassword === "" ||

        email === "" || firstName === "" || lastName === ""
    ) {
        error.innerText = "All fields are required!";
        return;
    }

    if (password !==
    confirmpassword) {
        error.innerText =
        "Passwords do not Match!";
        return;
    }

    if (!terms) {
        error.innerText = "Please accept Terms of Service!";
        return;
    }

    error.style.color = "green";
    error.innerText = "Signup Successful!";
}

