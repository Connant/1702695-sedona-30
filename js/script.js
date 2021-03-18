const searchButton = document.querySelector(".button-search-form");
const searchForm = document.querySelector(".search-form");

const arrival = document.querySelector("[name=arrival]");
const departure = document.querySelector("[name=departure]");

const adults = document.querySelector("[name=adults]");
const childrens = document.querySelector("[name=childrens]");


let isStorageSupport = true;
let storageArrival = "";
let storageDeparture = "";
let storageAdults = "";
let storageChildrens = "";

try {
  storageArrival = localStorage.getItem("arrival");
  storageDeparture = localStorage.getItem("departure");
  storageAdults = localStorage.getItem("adults");
  storageChildrens = localStorage.getItem("childrens");
} catch (err) {
  isStorageSupport = false;
}

searchForm.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !childrens.value) {
    evt.preventDefault();
    searchForm.classList.remove("modal-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("arrival", arrival.value);
      localStorage.setItem("departure", departure.value);
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("childrens", childrens.value);
    }
  }
});

searchButton.onclick = function modalShow(evt) {
  evt.preventDefault()

  searchForm.classList.toggle("modal-show");
  searchForm.classList.toggle("modal-hidden");
}
