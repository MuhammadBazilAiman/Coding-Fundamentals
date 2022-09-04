
const BASE_URL = "https://api.github.com/users/"

const button = document.querySelector("button")
const userInput = document.querySelector(".input")
const card = document.querySelector(".container")
const userName = document.querySelector(".user__name")
const userDesc = document.querySelector(".user__description")
const userJoinDate = document.querySelector(".user__joindate")
const userImgContainer = document.querySelector(".user__img")
const userImage = document.createElement("img")

button.addEventListener("click", ()=>{
    console.log(userInput.value)
    getAPI(userInput.value)
    // a command to retrieve user info on click of the button
})

userInput.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        console.log(userInput.value)
        getAPI(userInput.value)
    // a command to retrieve user info on "Enter" pressed
    }
})

async function getAPI (username) {
    const response = await fetch(BASE_URL + username)
    const user = await response.json()
    console.log(user)

    userImage.src = user.avatar_url
    userImgContainer.appendChild(userImage)
    userName.innerHTML = user.name
    userDesc.innerHTML = user.bio

    // wanted to change line 38 - 45 to a different function but I dunno how
    const monthReference = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let date = new Date(user.created_at)
    let day = date.getDate()
    let month = monthReference[date.getMonth()]
    let year = date.getFullYear()

    let dateUserJoined = `${day} ${month} ${year}`
    userJoinDate.innerHTML = `Joined at: ${dateUserJoined}`

    return user
}

// function displayDate() {
//     const monthReference = ["January","February","March","April","May","June","July","August","September","October","November","December"]
//     let date = new Date(user.created_at)
//     let day = date.getDate()
//     let month = monthReference[date.getMonth()]
//     let year = date.getFullYear()

//     let dateUserJoined = `${day} ${month} ${year}`
//     // console.log(dateUserJoined)
//     return dateUserJoined
// }

// what happens if we dont user this below function ?

// function getUser(username) {
//     getAPI(username)
//     .then((data)=>{
//         printUser(data)
//     })
//     .catch(error => console.log(error)) 
// }

// MuhammadBazilAiman