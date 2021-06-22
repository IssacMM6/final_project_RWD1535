import { predefinedData } from "./mock_data.js";
import { docGetId, docCreate } from "./common_function.js";
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
    let headerElement = {
      parent: docGetId("hearder-element"),
      openToogleBtn: docGetId("open-toogle"),
      closeToogleBtn: docGetId("close-toogle"),
      loginBtn: docGetId("login-btn"),
      logoutBtn: docGetId("logout-btn"),
      profileBtn: docGetId("profile-btn"),
    };
    /**
     *  getUserData from localStorage
     *  if getUserData is not empty hide loginBtn , show logoutBtn and profileBtn
     *  else show loginBtn , hide logoutBtn and profileBtn
     */
    let getUserData = localStorage.getItem("userData");
    let isUserDataEmpty = getUserData === "";
    if (!isUserDataEmpty) {
      headerElement.loginBtn.classList.add("d-none");
      headerElement.logoutBtn.classList.remove("d-none");
      headerElement.profileBtn.classList.remove("d-none");
    } else {
      headerElement.loginBtn.classList.remove("d-none");
      headerElement.logoutBtn.classList.add("d-none");
      headerElement.profileBtn.classList.add("d-none");
    }

    /**
     *  This section is about navbar toggleBtn
     */
    headerElement.openToogleBtn.addEventListener(
      "click",
      function () {
        document.body.style.overflowY = "hidden";
        headerElement.parent.style.overflowY = "scroll";
        headerElement.parent.classList.remove("header-close");
        headerElement.parent.classList.add("header-open");
        headerElement.openToogleBtn.classList.add("d-none");
        headerElement.closeToogleBtn.classList.remove("d-none");
      },
      false
    );

    headerElement.closeToogleBtn.addEventListener(
      "click",
      function () {
        document.body.style.overflowY = "scroll";
        headerElement.parent.style.overflowY = "hidden";
        headerElement.parent.classList.remove("header-open");
        headerElement.parent.classList.add("header-close");
        headerElement.openToogleBtn.classList.remove("d-none");
        headerElement.closeToogleBtn.classList.add("d-none");
      },
      false
    );
    headerElement.logoutBtn.addEventListener(
      "click",
      function () {
        localStorage.setItem("userData", "");
      },
      false
    );
  },
  false
);
