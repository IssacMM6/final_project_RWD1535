import { modelData } from "./mock_data.js";
import { sortByDEC, docGetId, docCreate } from "./common_function.js";

window.addEventListener(
  "load",
  function () {
    let getSortedModalData = sortByDEC(modelData);

    /**------------------------------------weeken model container-------------------------------------- */
    /**
     *   weeken-modal-container <= parent
     *      |--weeken-modal-card (add 6 times)
     *          |--image
     *          |--modal-card-header
     */
    let weekenModelContainer = docGetId("weeken-modal-container");
    let showMaleModel = docGetId("show-male-model");
    let showAllModel = docGetId("show-all-model");
    let showFemaleModel = docGetId("show-female-model");
    weekenModelContainer.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      let weekenModalCard = docCreate("a");
      let image = docCreate("div");
      let modalCardHeader = docCreate("div");

      weekenModalCard.href = "#";
      weekenModalCard.setAttribute("class", "weeken-modal-card link-none");

      image.style.background = `url("/images/${getSortedModalData[i].filename}")`;
      image.style.backgroundSize = "cover";
      image.style.backgroundPosition = "center";
      image.style.width = "200px";
      image.style.height = "200px";
      image.style.borderRadius = "3px";

      modalCardHeader.setAttribute("class", "modal-card-header fns-1 fn-sans");
      modalCardHeader.innerHTML = `${getSortedModalData[i].modalName}&nbsp;<i class="fas fa-crown fns-1 text-warning"></i><br /><span class="fns-1 text-gray-50"> (modal)</span>`;

      weekenModalCard.appendChild(image);
      weekenModalCard.appendChild(modalCardHeader);
      weekenModelContainer.appendChild(weekenModalCard);
    }

    /**--------------------------------gallary image container---------------------------------------- */

    function buildGallaryImgContaner(datalist, listNumber) {
      /**
       *    gallary-img-container <= parent
       *      |--wgallary-img-cards (add 12 times)
       *          |--card-img
       *          |--card-title
       */
      let gallaryImgContainer = docGetId("gallary-img-container");
      gallaryImgContainer.innerHTML = "";
      for (let i = 0; i < listNumber; i++) {
        let gallaryImageCard = docCreate("a");
        let cardImage = docCreate("div");
        let cardTitle = docCreate("div");

        gallaryImageCard.setAttribute("class", "gallary-img-cards link-none");
        gallaryImageCard.id = datalist[i].gender;
        gallaryImageCard.href = "#";

        cardImage.setAttribute("class", "card-img");
        cardImage.style.background = `url(/images/${datalist[i].filename})`;
        cardImage.style.width = "260px";
        cardImage.style.height = "300px";
        cardImage.style.backgroundSize = "cover";
        cardImage.style.backgroundPosition = "center";

        cardTitle.setAttribute("class", "card-title fns-1 fn-sans");
        cardTitle.innerHTML = `@${datalist[i].modalName}`;

        gallaryImageCard.appendChild(cardImage);
        gallaryImageCard.appendChild(cardTitle);
        gallaryImgContainer.appendChild(gallaryImageCard);
      }
    }
    // function call
    buildGallaryImgContaner(getSortedModalData, 15);

    /**--------------------------------categorize gallary image container---------------------------------------- */
    showMaleModel.addEventListener("click", function () {
      let getMaleData = modelData.filter((model) => model.gender === "male");
      buildGallaryImgContaner(getMaleData, 10);
    });
    showFemaleModel.addEventListener("click", function () {
      let getFemaleData = modelData.filter(
        (model) => model.gender === "female"
      );
      buildGallaryImgContaner(getFemaleData, 10);
    });
    showAllModel.addEventListener("click", function () {
      buildGallaryImgContaner(getSortedModalData, 15);
    });
  },
  false
);
