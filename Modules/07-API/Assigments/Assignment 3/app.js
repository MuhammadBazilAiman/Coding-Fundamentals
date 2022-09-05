const BASE_URL = "https://api.github.com/gists/9b66ecf99b2eb53799a9b52f11a71f43"

const button = document.querySelector("button")

button.addEventListener("click", ()=>{
    getAPI()
})

async function getAPI() {
    let response = await fetch(BASE_URL)
    // console.log(response)
    let data = await response.json()
    // console.log(data)
    let userContentString = data.files["me.json"].content
    // console.log(userContentString)
    // console.log(typeof(userContentString))

    let userContentObject = JSON.parse(userContentString);
    // console.log(userContentObject)
    // console.log(typeof(userContentObject))

    // name
    document.querySelector(".user__name").innerHTML = `Name: ${userContentObject.name}`
    // age
    document.querySelector(".user__age").innerHTML = `Age: ${userContentObject.age}`
    
    // hobbies
    const hobbies = userContentObject.hobbies
    hobbies.forEach((hobby) => {
        const createList = document.createElement("li")
        createList.innerHTML = hobby
        const selectUserHobbies = document.querySelector(".user__hobbies")
        selectUserHobbies.appendChild(createList)
    })
}