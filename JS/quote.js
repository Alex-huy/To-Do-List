const quotes = [
    {
        quote: "The way to get started is to quit taking and begin.",
        author: "Walt Disney"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Hellen Keller"
    },
    {
        quote: "He not busy being born is busy dying.",
        author: "Bob Dylan"
    },
    {
        quote: "The supreme irony of life is that hardly anyone gets out of it alive.",
        author: "Robert Heinlein"
    },
    {
        quote: "Life is a long lesson in humility.",
        author: "ames M. Barrie"
    },
    {
        quote: "The tragedy of life is what dies in the hearts and souls of people while they live.",
        author: "Albert Einstein"
    }
];
import { chosenImage } from "./background.js";
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote= quotes[Math.floor(Math.random() * quotes.length)];

if (chosenImage === "1.jpg") {
    quote.classList.add("black-quotes");
    author.classList.add("black-quotes")
}

quote.innerHTML = todayQuote["quote"] + "<br>";
author.innerHTML = todayQuote["author"] + "<br>";


