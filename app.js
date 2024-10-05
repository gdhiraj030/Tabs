const tabs = document.querySelectorAll(".tab");
const text = document.querySelectorAll(".text");
// hide all text content ----------------------
// ------------------------------------------
const hideALL = function () {
  text.forEach((el) => {
    el.style.display = "none";
  });
};
// return tabs to normal position -----------
// -----------------------------------------
const tabsPosition = function () {
  tabs.forEach((el) => {
    el.style.transform = "translateY(0)";
  });
};
// default style ---------------------
// -----------------------------------
text[0].style.display = "block";
tabs[0].style.transform = `translateY(${5}px)`;

//events happen through each tab clicks--------------------
// -------------------------------------------------------
tabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    hideALL();
    tabsPosition();
    tab.style.transform = `translateY(${5}px)`;
    text[index].style.display = "block";
  });
});
