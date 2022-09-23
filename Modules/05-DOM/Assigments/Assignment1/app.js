const addButton = document.querySelector(".add__button");
const notification = document.querySelector(".notification")



addButton.addEventListener("click", popupNoti)

function popupNoti() {
    notification.classList.add("show")
}

const cancel = document.querySelector(".cta__button");

function cancelNoti() {
    notification.classList.remove("show")
}

cancel.addEventListener("click", cancelNoti)