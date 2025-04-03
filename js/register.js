document.getElementById("register-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let fullname = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirm-password").value.trim();

  let fullnameError = document.getElementById("fullname-error");
  let emailError = document.getElementById("email-error");
  let passwordError = document.getElementById("password-error");
  let confirmPasswordError = document.getElementById("confirm-password-error");

  // Reset lỗi
  fullnameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  let isValid = true;

  // Kiểm tra tên đầy đủ
  if (!fullname) {
      fullnameError.textContent = "Họ và tên không được để trống.";
      isValid = false;
  }

  // Kiểm tra email
  if (!email) {
      emailError.textContent = "Email không được để trống.";
      isValid = false;
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      emailError.textContent = "Email không hợp lệ.";
      isValid = false;
  }

  // Kiểm tra mật khẩu
  if (!password) {
      passwordError.textContent = "Mật khẩu không được để trống.";
      isValid = false;
  } else if (password.length < 6) {
      passwordError.textContent = "Mật khẩu phải có ít nhất 6 ký tự.";
      isValid = false;
  }

  // Kiểm tra xác nhận mật khẩu
  if (!confirmPassword) {
      confirmPasswordError.textContent = "Vui lòng nhập lại mật khẩu.";
      isValid = false;
  } else if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Mật khẩu xác nhận không khớp.";
      isValid = false;
  }

  // Nếu hợp lệ, lưu vào LocalStorage
  if (isValid) {
      let userData = {
          fullname: fullname,
          email: email,
          password: password 
      };

      localStorage.setItem("user", JSON.stringify(userData));
  }
});
