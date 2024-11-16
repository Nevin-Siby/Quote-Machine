const quotes = [
    {
        quote: "The trust of the innocent is the liar's most useful tool.",
        author: "Stephen King"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "Never put off till tomorrow what may be done day after tomorrow just as well.",
        author: "Mark Twain"
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche"
    }
]

const quotediv = document.querySelector(".quote");
const authordiv = document.querySelector(".author");
const bt = document.querySelector(".bt")

bt.addEventListener("click", () =>{
    const index = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[index];

    quotediv.textContent = `"${randomQuote.quote}"`
    authordiv.textContent = `-${randomQuote.author}`
})


