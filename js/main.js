let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elAlert = document.querySelector(".alert");
let elAlert1 = document.querySelector(".alert1");
let elList = document.querySelector(".lists");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (elInput.value == "") {
    elAlert.classList.remove("d-none");

    setTimeout(() => {
      elAlert.classList.add("d-none");
    }, 3000);

    return;
  } else if (elInput.value < 0) {
    elAlert1.classList.remove("d-none");

    setTimeout(() => {
      elAlert1.classList.add("d-none");
    }, 3000);

    return;
  }

  let newItem = document.createElement("li");
  newItem.setAttribute("class", "timeOut");
  newItem.textContent = elInput.value;

  let count = elInput.value;
  setInterval(() => {
    if (count == 0) {
      newItem.classList.add("d-none");
    }
    count -= 1;
    newItem.textContent = count;
  }, 1000);

  elList.appendChild(newItem);
  elInput.value = "";
});
