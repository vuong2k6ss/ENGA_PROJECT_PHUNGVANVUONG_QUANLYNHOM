document.getElementById("login-button").addEventListener("click", function (event) {
    event.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");

    emailError.textContent = "";
    passwordError.textContent = "";
    email.classList.remove("error");
    password.classList.remove("error");

    let isValid = true;

    // Kiểm tra email
    if (!email.value.trim()) {
        emailError.textContent = "Email không được để trống.";
        email.classList.add("error");
        isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
        emailError.textContent = "Email không hợp lệ.";
        email.classList.add("error");
        isValid = false;
    }

    // Kiểm tra mật khẩu
    if (!password.value.trim()) {
        passwordError.textContent = "Mật khẩu không được để trống.";
        password.classList.add("error");
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = "Mật khẩu phải có ít nhất 6 ký tự.";
        password.classList.add("error");
        isValid = false;
    }

    if (isValid) {
        alert("Đăng nhập thành công!");
        // Thực hiện gửi dữ liệu hoặc chuyển hướng tại đây
    }
});
