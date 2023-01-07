let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elAlert = document.querySelector(".alert");
let elList = document.querySelector(".lists");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (elInput.value == "") {
    elAlert.classList.remove("d-none");

    setTimeout(() => {
      elAlert.classList.add("d-none");
    }, 3000);

    return
  }

  let newItem = document.createElement("li");
  newItem.setAttribute("class", "timeOut");
  newItem.textContent = elInput.value;

  let count = elInput.value;
  setInterval(() => {
    if (count == 0) {
      newItem.classList.add("d-none");
    }
    newItem.textContent = count;
    count--;
  }, 1000);

  elList.appendChild(newItem);
  elInput.value = "";
});
