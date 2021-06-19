window.addEventListener(
  "load",
  function () {
    let getId = (idName) => {
      return document.getElementById(idName);
    };
    let headerElement = {
      parent: getId("hearder-element"),
      openToogleBtn: getId("open-toogle"),
      closeToogleBtn: getId("close-toogle"),
    };

    headerElement.openToogleBtn.addEventListener(
      "click",
      function () {
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
        headerElement.parent.classList.remove("header-open");
        headerElement.parent.classList.add("header-close");
        headerElement.openToogleBtn.classList.remove("d-none");
        headerElement.closeToogleBtn.classList.add("d-none");
      },
      false
    );
  },
  false
);
