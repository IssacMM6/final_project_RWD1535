window.addEventListener(
  "load",
  function () {
    let predefinedData = {
      email: "tiny123@gmail.com",
      password: "tiny312",
      userName: "Tiny",
    };
    let getId = (idName) => {
      return document.getElementById(idName);
    };
    let headerElement = {
      parent: getId("hearder-element"),
      openToogleBtn: getId("open-toogle"),
      closeToogleBtn: getId("close-toogle"),
      loginBtn: getId("login-btn"),
      logoutBtn: getId("logout-btn"),
      profileBtn: getId("profile-btn"),
    };
    let getUserData = localStorage.getItem("userData");
    let isUserDataEmpty = getUserData === "";
    if (!isUserDataEmpty) {
      let parsedUserData = JSON.parse(getUserData);
      let emailExist = parsedUserData.email === predefinedData.email;
      let passwordExist = parsedUserData.password === predefinedData.password;

      if (emailExist && passwordExist) {
        headerElement.loginBtn.classList.add("d-none");
        headerElement.logoutBtn.classList.remove("d-none");
        headerElement.profileBtn.classList.remove("d-none");
      }
    } else {
      headerElement.loginBtn.classList.remove("d-none");
      headerElement.logoutBtn.classList.add("d-none");
      headerElement.profileBtn.classList.add("d-none");
    }

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
