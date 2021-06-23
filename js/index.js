import { modelData } from "./mock_data.js";
import { sortByDEC, docGetId, docCreate } from "./common_function.js";

window.addEventListener(
  "load",
  function () {
    let getModelData = sortByDEC(modelData);

    /**
     *   weeken-modal-container <= parent
     *      |--weeken-modal-card (add 6 times)
     *          |--image
     *          |--modal-card-header
     */
    let weekenModelContainer = docGetId("weeken-modal-container");
    weekenModelContainer.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      let weekenModalCard = docCreate("a");
      let image = docCreate("div");
      let modalCardHeader = docCreate("div");

      /**
       * weekenModelCard styling
       */
      weekenModalCard.href = "#";
      weekenModalCard.setAttribute("class", "weeken-modal-card link-none");

      /**
       * image styling
       */
      image.style.background = `url("/images/${getModelData[i].filename}")`;
      image.style.backgroundSize = "cover";
      image.style.backgroundPosition = "center";
      image.style.width = "200px";
      image.style.height = "200px";
      image.style.borderRadius = "3px";

      /**
       * modalCardHeader styling
       */
      modalCardHeader.setAttribute("class", "modal-card-header fns-1 fn-sans");
      modalCardHeader.innerHTML = `${getModelData[i].modalName}&nbsp;<i class="fas fa-crown fns-1 text-warning"></i><br /><span class="fns-1 text-gray-50"> (modal)</span>`;

      /**
       * appending child
       */
      weekenModalCard.appendChild(image);
      weekenModalCard.appendChild(modalCardHeader);
      weekenModelContainer.appendChild(weekenModalCard);
    }

    /**
     *    gallary-img-container <= parent
     *      |--wgallary-img-cards (add 12 times)
     *          |--card-img
     *          |--card-title
     */
    let gallaryImgContainer = docGetId("gallary-img-container");
    gallaryImgContainer.innerHTML = "";
    for (let i = 0; i < getModelData.length - 3; i++) {
      let gallaryImageCard = docCreate("a");
      let cardImage = docCreate("div");
      let cardTitle = docCreate("div");

      /**
       * gallaryImageCard styling
       */
      gallaryImageCard.setAttribute("class", "gallary-img-cards link-none");
      gallaryImageCard.id = getModelData[i].gender;
      gallaryImageCard.href = "#";
      /**
       *    cardImage styling
       */
      cardImage.setAttribute("class", "card-img");
      cardImage.style.background = `url(/images/${getModelData[i].filename})`;
      cardImage.style.width = "260px";
      cardImage.style.height = "300px";
      cardImage.style.backgroundSize = "cover";
      cardImage.style.backgroundPosition = "center";

      /**
       * cardTitle styling
       */
      cardTitle.setAttribute("class", "card-title fns-1 fn-sans");
      cardTitle.innerHTML = `@${getModelData[i].modalName}`;

      /**
       * appending child
       */
      gallaryImageCard.appendChild(cardImage);
      gallaryImageCard.appendChild(cardTitle);
      gallaryImgContainer.appendChild(gallaryImageCard);
    }
  },
  false
);
