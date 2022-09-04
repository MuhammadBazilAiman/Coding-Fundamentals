const BASE_URL = 'https://api.quotable.io/random'

const button = document.querySelector("button")

button.addEventListener("click", ()=>{
    getQuote()
})

async function getQuote() {
    const response = await fetch(BASE_URL)
    const quote = await response.json()

    let quoteContent = document.querySelector('.quote')
    quoteContent.innerHTML = quote.content

    let quoteAuthor = document.querySelector('.quote__author')
    quoteAuthor.innerHTML = `- ${quote.author}`
}


