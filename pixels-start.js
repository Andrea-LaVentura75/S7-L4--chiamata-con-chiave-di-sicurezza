let arrayImgAuto = [];
let buttonLoadImg = document.getElementById("Load-Images");
let ricerca = "";

buttonLoadImg.addEventListener("click", function () {
  let query = ricerca ? ricerca : "car";
  fetch(`https://api.pexels.com/v1/search?query=  ${query}`, {
    method: "GET",
    headers: {
      Authorization: "jWiqXTQeJQAmsJoaB88FqUBbW6od8mzffV3ZKWzx3VCVumdQOujM5RXg",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error("La risposta del server non è ok");
      }
    })
    .then((data) => {
      data.photos.forEach((img) => {
        arrayImgAuto.push(img);
      });
      generaFotoAuto();
    })
    .catch((Error) => {
      console.log("errore", Error);
    });
});

let imgHtml = document.querySelectorAll("img");
let textInfoPhoto = document.querySelectorAll(".text-muted");

const generaFotoAuto = function () {
  imgHtml.forEach((imgElement, index) => {
    if (arrayImgAuto[index]) {
      imgElement.src = arrayImgAuto[index].src.medium;
    }
  });

  textInfoPhoto.forEach((textInfo, index) => {
    textInfo.innerText = arrayImgAuto[index].id;
  });
};

console.log(arrayImgAuto);

let arrrayImgMoto = [];
let buttonSecondLoadImg = document.getElementById("Load-Images-2");

buttonSecondLoadImg.addEventListener("click", function () {
  let query = ricerca ? ricerca : "moto Gp";
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    method: "GET",
    headers: {
      Authorization: "jWiqXTQeJQAmsJoaB88FqUBbW6od8mzffV3ZKWzx3VCVumdQOujM5RXg",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error("La risposta del server non è ok");
      }
    })
    .then((data) => {
      data.photos.forEach((img) => {
        arrrayImgMoto.push(img);
      });
      generaFotoMoto();
    })
    .catch((Error) => {
      console.log("errore", Error);
    });
});

const generaFotoMoto = function () {
  imgHtml.forEach((imgElement, index) => {
    if (arrrayImgMoto[index]) {
      imgElement.src = arrrayImgMoto[index].src.medium;
    }
  });

  textInfoPhoto.forEach((textInfo, index) => {
    textInfo.innerText = arrrayImgMoto[index].id;
  });
};

console.log(arrrayImgMoto);

let buttonEdit = document.querySelectorAll(".edit");

const buttonHide = function () {
  buttonEdit.forEach((button) => {
    button.innerText = "Hide";
    button.addEventListener("click", function (event) {
      let colonna = event.target.closest(".card");
      colonna.classList.add("d-none");
    });
  });
};
buttonHide();

let form = document.querySelector("form");
let imputText = document.getElementById("exampleDataList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  ricerca = imputText.value;
  console.log("Valore globale iniziale di ricerca:", ricerca);
});
