window.addEventListener(
  "load",
  function () {
    let getUserData = localStorage.getItem("userData");
    let parsedUserData = JSON.parse(getUserData);
    let userNameElement = document.getElementById("user-name");
    let hiredListElement = document.getElementById("hired-list");
    let fakeDateAndModel = [
      {
        date: "2020-10-1",
        hiredModel: "James",
      },
      {
        date: "2020-12-12",
        hiredModel: "Jhonson",
      },
      {
        date: "2021-1-10",
        hiredModel: "Jhonson",
      },
      {
        date: "2021-1-15",
        hiredModel: "Taylor",
      },
      {
        date: "2021-2-19",
        hiredModel: "Austin",
      },
    ];
    userNameElement.innerHTML = `@user - ${parsedUserData.userName}`;
    for (let i = 0; i < fakeDateAndModel.length; i++) {
      let date = fakeDateAndModel[i].date;
      let model = fakeDateAndModel[i].hiredModel;
      let listElement = document.createElement("div");
      let listInnerElement = document.createElement("div");
      listElement.setAttribute("class", "hired-list-user");
      listInnerElement.setAttribute("class", "fns-1 fn-sans p-1");
      let dateElement = `<span>${date}</span>`;
      let modelElement = `You hired <a href="#" class="link-underline">${model}</a>`;
      listInnerElement.innerHTML = dateElement + modelElement;
      listElement.appendChild(listInnerElement);
      hiredListElement.appendChild(listElement);
    }
  },
  false
);
