"use strict";
//* Checkboxes
const checkBoxes = document.querySelectorAll("#checkBox");
checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    checkBox.classList.toggle("checked");
  });
});
//* Heart icons
const addToFavorites = document.querySelectorAll("#addToFav");
addToFavorites.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.contains("fa-regular")
      ? (heart.className =
          "fa-solid fa-heart  cursor-pointer text-lg text-red-300")
      : (heart.className =
          "fa-regular fa-heart  cursor-pointer text-lg text-grey-600");
  });
});
//* Show and hide aside and dropdown
const aside = document.querySelector("aside");
const filterBtn = document.querySelector("#filterBtn");
const dropDownBtn = document.querySelector("#dropDownBtn");
const dropDown = document.querySelector("#dropDown");
const sideBarDropDownBtn = document.querySelector("#sideBarDropDownBtn");
const sideBarDropDown = document.querySelector("#sideBarDropDown");
const sideBar = document.querySelector("#sideBar");
const sideBarOpenBtn = document.querySelector("#sideBarOpenBtn");

const showAndHideElement = (element, elementBtn, elementName) => {
  elementBtn?.addEventListener("click", () => {
    element.classList.toggle("show");
    if (elementBtn === dropDownBtn || elementBtn === sideBarDropDownBtn) {
      elementBtn.classList.toggle("rotate-180");
    }
  });

  document.addEventListener("click", (e) => {
    if (
      // !e.target.contains(element) &&
      !element.contains(e.target) &&
      !e.target.contains(elementBtn)
    ) {
      element.classList.remove("show");
    }
    if (sideBar.classList.contains("show"))
      if (e.target.classList.contains("before:h-full")) {
        element.classList.remove("show");
      }
  });
};
showAndHideElement(aside, filterBtn, "aside");
showAndHideElement(dropDown, dropDownBtn, "#dropDown");
showAndHideElement(sideBarDropDown, sideBarDropDownBtn, "#sideBarDropDown");
showAndHideElement(sideBar, sideBarOpenBtn, "#sideBar");
