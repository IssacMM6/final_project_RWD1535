window.addEventListener(
  "load",
  function () {
    let predefinedData = {
      username: "Tiny",
      email: "tiny123@gmail.com",
      password: "tiny312",
    };
    let getId = (idName) => {
      return document.getElementById(idName);
    };
    let formElement = {
      emailInput: getId("email-input"),
      passwordInput: getId("password-input"),
      loginBtn: getId("login-input"),
      messageBox: getId("message-box"),
    };
    formElement.loginBtn.addEventListener(
      "click",
      function () {
        let emailInput = formElement.emailInput.value;
        let passwordInput = formElement.passwordInput.value;
        let messageBox = formElement.messageBox;
        let isEmailInputEmpty = emailInput === "";
        let isPasswordInputEmpty = passwordInput === "";
        let isUserExist =
          emailInput !== predefinedData.email &&
          passwordInput !== predefinedData.password;
        if (isEmailInputEmpty) {
          messageBox.classList.remove("d-none");
          messageBox.innerHTML = "Your Email Is Empty.";
        } else if (isPasswordInputEmpty) {
          messageBox.classList.remove("d-none");
          messageBox.innerHTML = "Your Password Is Empty.";
        } else if (isUserExist) {
          messageBox.classList.remove("d-none");
          messageBox.innerHTML = "User Didn't Exist.Try Again.";
        } else {
          messageBox.classList.add("d-none");
          let userData = {
            email: emailInput,
            password: passwordInput,
            userName: predefinedData.username,
          };
          localStorage.setItem("userData", JSON.stringify(userData));
          window.location.replace("../index.html");
        }
      },
      false
    );
  },
  false
);
