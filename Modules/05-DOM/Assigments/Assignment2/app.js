const mainElement = document.querySelector(".wrapper")

document.addEventListener("keypress", (e) =>{
    console.log(e)
    if(e.key === "\u0011") {
        mainElement.style.display = "block"
    } 
})

document.addEventListener("keydown", (e) =>{
    console.log(e)
    if (e.key === "Escape") {
        mainElement.style.display = "none";
    }
})