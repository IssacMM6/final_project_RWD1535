import { modelData } from "./mock_data.js";

window.addEventListener(
  "load",
  function () {
    let getModelData = modelData.sort((a, b) => {
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    });

    let trandingModelElement = document.getElementById("tranding-model");
    trandingModelElement.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      let weekenModalCard = document.createElement("a");
      weekenModalCard.href = "#";
      weekenModalCard.classList.add("weeken-modal-card");
      weekenModalCard.classList.add("link-none");
      let image = document.createElement("div");
      image.style.background = `url("/model_image/${getModelData[i].filename}")`;
      image.style.backgroundSize = "cover";
      image.style.backgroundPosition = "center";
      image.style.width = "200px";
      image.style.height = "200px";
      image.style.borderRadius = "3px";
      let modalCardHeader = document.createElement("div");
      modalCardHeader.setAttribute("class", "modal-card-header fns-1 fn-sans");
      modalCardHeader.innerHTML = `${getModelData[i].modalName}&nbsp;<i class="fas fa-crown fns-1 text-warning"></i><br /><span class="fns-1 text-gray-50"> (modal)</span>`;
      weekenModalCard.appendChild(image);
      weekenModalCard.appendChild(modalCardHeader);
      trandingModelElement.appendChild(weekenModalCard);
    }

    let gallaryImgContainer = document.getElementById("gallary-img-container");
    gallaryImgContainer.innerHTML = "";
    for (let i = 0; i < getModelData.length - 3; i++) {
      let gallaryImageCard = document.createElement("a");
      gallaryImageCard.setAttribute("class", "gallary-img-cards link-none");
      gallaryImageCard.id = getModelData[i].gender;
      let cardImage = document.createElement("div");
      cardImage.setAttribute("class", "card-img");
      cardImage.style.background = `url(/model_image/${getModelData[i].filename})`;
      cardImage.style.width = "260px";
      cardImage.style.height = "300px";
      cardImage.style.backgroundSize = "cover";
      cardImage.style.backgroundPosition = "center";
      let cardTitle = document.createElement("div");
      cardTitle.setAttribute("class", "card-title fns-1 fn-sans");
      cardTitle.innerHTML = `@${getModelData[i].modalName}`;
      gallaryImageCard.appendChild(cardImage);
      gallaryImageCard.appendChild(cardTitle);
      gallaryImgContainer.appendChild(gallaryImageCard);
    }
  },
  false
);
