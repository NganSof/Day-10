const btnSuccess = document.querySelector(".control .success");
let btnWarning = document.querySelector(".control .warning");
let btnError = document.querySelector(".control .error");
let toast = document.querySelector(".toast");

btnSuccess.addEventListener("click", function (e) {
  createToast("success");
});
btnWarning.addEventListener("click", function (e) {
  createToast("warning");
});
btnError.addEventListener("click", function (e) {
  createToast("error");
});
function createToast(status) {
  let divToast = document.createElement("div");
  divToast.classList.add("toast");
  divToast.classList.add(status);
  divToast.innerHTML = `<i class="fa-solid fa-xmark"></i>
  <span class="message"> This is a ${status}</span>
  <span class="countdown"></span>`;
  let toastLists = document.getElementById("toasts");
  toastLists.appendChild(divToast);

  setTimeout(() => {
    divToast.style.animation = `slideHide 3s ease forwards`;
    divToast.remove();
  }, 3000);
}
