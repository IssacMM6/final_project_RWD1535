import { predefinedData } from "./mock_data.js";
import {
  docGetId,
  getItemsFromLocalStorage,
  setItemsToLocalStorage,
} from "./common_function.js";

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

    /**
     *   if userData from the loacal storage is null
     *   it will not put the userData value from the local storage to the text input.
     *   if userData is not null
     *   email value from localStorage will be display in text input
     */
    let getUserData = getItemsFromLocalStorage("userData");
    if (getUserData !== null) {
      formElement.emailInput.value = getUserData.email;
      formElement.passwordInput.value = getUserData.password;
    }

    formElement.emailInput.addEventListener("keyup", function () {
      setItemsToLocalStorage("userData", formElement.emailInput.value, "", "");
    });
    formElement.loginBtn.addEventListener(
      "click",
      function () {
        let emailInput = formElement.emailInput;
        let passwordInput = formElement.passwordInput;

        /**
         *    setItemsToLocalStorage is use for store data when the sign in button is pressed.
         *    if you refreshed the page, the value in the text Input will not be deleted
         *    or if you got to the index.html page and return to the login from
         *    the text Input will not be deleted
         */
        setItemsToLocalStorage("userData", emailInput.value, "", "");

        /**
         *  checking the Input
         *  1.if email input is empty the error message box will be displayed
         *  2.if password input is empty the error message box will be displayed
         *  3.if email format is not right error messge box will be displayed
         */
        let messageBox = formElement.messageBox;
        let isEmailInputEmpty = emailInput.value === "";
        let isPasswordInputEmpty = passwordInput.value === "";
        var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (isEmailInputEmpty) {
          messageBox.classList.remove("d-none");
          messageBox.innerHTML = "Your Email Input Is Empty.";
          emailInput.focus();
        } else if (isPasswordInputEmpty) {
          messageBox.classList.remove("d-none");
          messageBox.innerHTML = "Your Password Input Is Empty.";
          passwordInput.focus();
        } else if (!emailInput.value.match(mailformat)) {
          messageBox.classList.remove("d-none");
          messageBox.innerHTML = "Your Email Format Is Wrong.";
          emailInput.focus();
        } else {
          /**
           *    checking steps
           *    1.if the email is not exist the error message will be displayed
           *    2.if the password is not right the error message will be displayed
           *    3.if the above two passes, the userData will be store in the local storage
           *      and redirect to admin.html page
           */
          let isEmailNotExist = emailInput.value !== predefinedData.email;
          let isPasswordNotRight =
            passwordInput.value !== predefinedData.password;
          if (isEmailNotExist) {
            messageBox.classList.remove("d-none");
            messageBox.innerHTML = "Email doesn't Exist.";
            emailInput.focus();
          } else if (isPasswordNotRight) {
            messageBox.classList.remove("d-none");
            messageBox.innerHTML = "Wrong Password.";
            passwordInput.focus();
          } else {
            messageBox.classList.add("d-none");
            setItemsToLocalStorage(
              "userData",
              emailInput.value,
              passwordInput.value,
              predefinedData.userName
            );
            window.location.replace("../admin.html");
          }
        }
      },
      false
    );
  },
  false
);
