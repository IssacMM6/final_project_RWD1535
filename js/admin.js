import {
  getItemsFromLocalStorage,
  docGetId,
  docCreate,
} from "./common_function.js";
import { fakeDateAndModel } from "./mock_data.js";

window.addEventListener(
  "load",
  function () {
    let parsedUserData = getItemsFromLocalStorage("userData");

    /**
     *
     *   userNameElement <=parent
     *   hired-list <= parent
     *      |--listElement (add 5 times)
     *          |--listInnerElement
     */
    let userNameElement = docGetId("user-name");
    let hiredListElement = docGetId("hired-list");
    userNameElement.innerHTML = `@user - ${parsedUserData.userName}`;

    for (let i = 0; i < fakeDateAndModel.length; i++) {
      let date = fakeDateAndModel[i].date;
      let model = fakeDateAndModel[i].hiredModel;
      let listElement = docCreate("div");
      let listInnerElement = docCreate("div");
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
