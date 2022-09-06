const BASE_URL = "https://api.thecatapi.com/v1/breeds"

async function getAPI() {
    let response = await fetch(BASE_URL)
    console.log(response)
    
    let data = await response.json()
    console.log(data)


    data.forEach((data) => {

    // create a new div and insert under ".profile__box"
    const selectProfileBox = document.querySelector(".profile__box")
    const createDiv = document.createElement("div")
    createDiv.style.position = "relative"
    createDiv.style.border = "1px solid lightgrey"
    selectProfileBox.appendChild(createDiv)

    // insert cat image in the new div
    const createImg = document.createElement("img")
    createImg.src = data.image.url
    createDiv.appendChild(createImg)

    // insert cat name in the new div
    const createName = document.createElement("h3")
    createName.classList.add("name__p")
    createName.innerHTML = data.name
    createDiv.appendChild(createName)

    // insert description of cat in the new div
    const createDesc = document.createElement("p")
    createDesc.classList.add("description__p")
    createDesc.innerHTML = data.description
    createDiv.appendChild(createDesc)

    // insert link in new div
    const createLink = document.createElement("a")
    createLink.href = data.image.url
    createLink.textContent = "Profile"
    createDiv.appendChild(createLink)
})}


getAPI()

