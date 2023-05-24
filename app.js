///////////////////// NAVBAR JS ///////////////////////////////////////

const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
openBtn.onclick = closeOrOpenNav;
function closeOrOpenNav() {
  if (sidenav.classList.contains("active")) {
    sidenav.classList.remove("active");
    sidenav.classList.add("transitionOut");
  } else {
    sidenav.classList.add("active");
    sidenav.classList.remove("transitionOut");
  }
}
///////////////////// NAVBAR JS ///////////////////////////////////////

///////////////////// DROPDONW AND FILTER JS ///////////////////////////////////////
filterSelection("all");
function filterSelection(c) {
  let x, i;
  x = document.querySelectorAll(".filterDiv");
  if (c == "all") c == "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "showFilteredElements");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "showFilteredElements");
  }
}
// montrer les elements selectioner
function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++)
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
}
// cacher les elemens non selectione
function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
//ajout de la classe "active" sur le bouton actuel choisi

let dropDownContainer = document.querySelector("#myDropdown");

let choiceSelection = dropDownContainer.querySelectorAll("a");

choiceSelection.forEach(function (choice) {
  choice.addEventListener("click", function () {
    myDropDownMenu();
  });
});

let current = document.querySelectorAll(".active");
current.forEach(function (element) {
  element.className = element.className.replace("active", "");
});

function myDropDownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

///////////////////// DROPDONW AND FILTER JS ///////////////////////////////////////

///////////////////// Click pop up ////////////////////////////////////////////////

const main = document.querySelector(".main");
const footer = document.querySelector("#bottom");

//when the user click on Auguste picture
const clickAuguste = document.querySelector("#popupAuguste");

const popupAuguste = document.querySelector("#popupBakeryAuguste");

const closeButAuguste = document.querySelector("#close-btnAuguste");

const body = document.querySelector("body");

clickAuguste.addEventListener("click", function () {
  popupAuguste.style.display = "flex";
  main.classList.add("activePopup");
  body.classList.add("bodyActivePopup");
  footer.classList.add("activePopup");
});

closeButAuguste.addEventListener("click", function () {
  popupAuguste.style.display = "none";
  main.classList.remove("activePopup");
  body.classList.remove("bodyActivePopup");
  footer.classList.remove("activePopup");
});

//when the user click on Toque picture
const clickToque = document.querySelector("#popupToque");

const popupToque = document.querySelector("#popupBakeryToque");

const closeButToque = document.querySelector("#close-btnToque");

clickToque.addEventListener("click", function () {
  popupToque.style.display = "flex";
  main.classList.add("activePopup");
  body.classList.add("bodyActivePopup");
  footer.classList.add("activePopup");
});

closeButToque.addEventListener("click", function () {
  popupToque.style.display = "none";
  main.classList.remove("activePopup");
  body.classList.remove("bodyActivePopup");
  footer.classList.remove("activePopup");
});

//when the user click on Eric picture
const clickEric = document.querySelector("#popupEric");

const popupEric = document.querySelector("#popupBakeryEric");

const closeButEric = document.querySelector("#close-btnEric");

clickEric.addEventListener("click", function () {
  popupEric.style.display = "flex";
  main.classList.add("activePopup");
  body.classList.add("bodyActivePopup");
  footer.classList.add("activePopup");
});

closeButEric.addEventListener("click", function () {
  popupEric.style.display = "none";
  main.classList.remove("activePopup");
  body.classList.remove("bodyActivePopup");
  footer.classList.remove("activePopup");
});

//when the user click on Louis picture
const clickLouis = document.querySelector("#popupLouis");

const popupLouis = document.querySelector("#popupBakeryLouis");

const closeButLouis = document.querySelector("#close-btnLouis");

clickLouis.addEventListener("click", function () {
  popupLouis.style.display = "flex";
  main.classList.add("activePopup");
  body.classList.add("bodyActivePopup");
  footer.classList.add("activePopup");
});

closeButLouis.addEventListener("click", function () {
  popupLouis.style.display = "none";
  main.classList.remove("activePopup");
  body.classList.remove("bodyActivePopup");
  footer.classList.remove("activePopup");
});

//when the user click on Pain picture
const clickPain = document.querySelector("#popupPain");

const popupPain = document.querySelector("#popupBakeryPain");

const closeButPain = document.querySelector("#close-btnPain");

clickPain.addEventListener("click", function () {
  popupPain.style.display = "flex";
  main.classList.add("activePopup");
  body.classList.add("bodyActivePopup");
  footer.classList.add("activePopup");
});

closeButPain.addEventListener("click", function () {
  popupPain.style.display = "none";
  main.classList.remove("activePopup");
  body.classList.remove("bodyActivePopup");
  footer.classList.remove("activePopup");
});

//when the user click on Boulanger picture
const clickBoulanger = document.querySelector("#popupBoulanger");

const popupBoulanger = document.querySelector("#popupBakeryBoulanger");

const closeButBoulanger = document.querySelector("#close-btnBoulanger");

clickBoulanger.addEventListener("click", function () {
  popupBoulanger.style.display = "flex";
  main.classList.add("activePopup");
  body.classList.add("bodyActivePopup");
  footer.classList.add("activePopup");
});

closeButBoulanger.addEventListener("click", function () {
  popupBoulanger.style.display = "none";
  main.classList.remove("activePopup");
  body.classList.remove("bodyActivePopup");
  footer.classList.remove("activePopup");
});
///////////////////// Click pop up ////////////////////////////////////////////////
