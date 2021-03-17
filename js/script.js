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

searchButton.onclick = function modalShow() {
	if(document.querySelector('.modal-show')) {
		searchForm.classList.remove('modal-show');
		searchForm.classList.add('modal-hidden');
	}
	else {
		searchForm.classList.remove('modal-hidden');
		searchForm.classList.add('modal-show');
	}
}


































// Открытие и закрытие формы

// var searchButton = document.querySelector('.button-search-form')
// var searchForm = document.querySelector('.search-form')

// searchButton.onclick = function modalShow() {
// 	if(document.querySelector('.modal-hidden')) {
// 		searchForm.classList.remove('modal-hidden');
// 		searchForm.classList.add('modal-show');
// 	}
// 	else {
// 		searchForm.classList.remove('modal-show');
// 		searchForm.classList.add('modal-hidden');
// 	}
// }































// window.onload = function fillLowerFields() {
// 	adults.value = localStorage.getItem('adults');
// 	kids.value = localStorage.getItem('kids');
// }



// const link = document.querySelector(".button-search-form");
// const popup = document.querySelector(".search-form");
// const arrival = popup.querySelector("[name=arrival]");
// const departure = popup.querySelector("[name=departure]");

// let isStorageSupport = true;
// let storageArrival = "";
// let storageDeparture = "";

// try {
//   storageArrival = localStorage.getItem("arrival");
//   storageDeparture = localStorage.getItem("departure");
// } catch (err) {
//   isStorageSupport = false;
// }

// popup.classList.remove("modal-show");
// link.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.toggle("modal-show");
//   if (popup.classList.contains("modal-show")
//     && storageArrival && storageDeparture) {
//     arrival.value = storageArrival;
//     departure.value = storageDeparture;
//   arrival.focus();
// }
// });

// popup.addEventListener("submit", function (evt) {
//   if (!arrival.value || !departure.value) {
//     evt.preventDefault();
//     popup.classList.remove("modal-error");
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add("modal-error");
//   } else {
//   if (isStorageSupport) {
//     localStorage.setItem("arrival", arrival.value);
//     localStorage.setItem("departure", departure.value);
//     }
//   }
// });

// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     if (popup.classList.contains("modal-show")) {
//       evt.preventDefault();
//       popup.classList.remove("modal-show");
//     }
//   }
// });

// function CedonaMap() {
//   var mapCanvas = document.getElementById("map");
//   var mapOptions = {
//       center: new google.maps.LatLng()
//   };
//   var map = new google.maps.Map(mapCanvas, mapOptions);
// }
