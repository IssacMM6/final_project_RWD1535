import { predefinedData } from "./mock_data.js";
import { docGetId } from "./common_function.js";
window.addEventListener(
  "load",
  function () {
    /**
     *    headerElement <= parent
     *      |--openToogleBtn    <= child
     *      |--closeToogleBtn   <= child
     *      |--loginBtn         <= child
     *      |--logoutBtn        <= child
     *      |--profileBtn       <= child
     */
    let formElement = {
      emailInput: docGetId("email-input"),
      passwordInput: docGetId("password-input"),
      loginBtn: docGetId("login-input"),
      messageBox: docGetId("message-box"),
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
            userName: predefinedData.userName,
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
