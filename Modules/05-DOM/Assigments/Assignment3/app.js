const registerButton = document.querySelector(".button");
const wrapperDiv = document.querySelector(".wrapper");
const closeButton = document.querySelector(".close-button");

registerButton.addEventListener("click", () => {
  // wrapperDiv.style.display = "block";
  wrapperDiv.className = "slide-in";
});

closeButton.addEventListener("click", () => {
  wrapperDiv.className = "wrapper";
});
