function validateForm() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmpassword = document.getElementById("confirmpassword").value.trim();
    let email = document.getElementById("email").value.trim();
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let terms = document.getElementById("terms").checked;
    let error = document.getElementById("errorMsg");

    error.style.color = "red";

    // 1️⃣ Empty fields check
    if (username === "" || password === "" || confirmpassword === "" ||
        email === "" || firstName === "" || lastName === "") {

        error.innerText = "All fields are required!";
        return false;
    }

    // 2️⃣ Password match check
    if (password !== confirmpassword) {
        error.innerText = "Passwords do not match!";
        return false;
    }

    // 3️⃣ Password length check
    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters!";
        return false;
    }

    // 4️⃣ Email format check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!email.match(emailPattern)) {
        error.innerText = "Enter a valid email address!";
        return false;
    }

    // 5️⃣ Terms checkbox check
    if (!terms) {
        error.innerText = "Please accept the Terms of Service!";
        return false;
    }

    // ✅ Success
    error.style.color = "green";
    error.innerText = "Signup Successful!";
    return true;
}
