const titleEl = document.querySelector("div.container>h1.title");
const loginForm = document.querySelector(".input-form");
const loginInput = document.querySelector(".input-form input")
const greeting = document.querySelector(".input-form~h1");
let username = [];
import { chosenImage } from "./background.js";
// console.dir(titleEl);


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = JSON.parse(localStorage.getItem(USERNAME_KEY));


if (chosenImage === "0.jfif") {
    greeting.classList.add("white-text")
}

if (chosenImage=== "1.jpg") {
    loginInput.classList.add("color-change")
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}


function onLoginSubmit(event) {
    //* preventDefaut means we watn to stop default behavior of brower
    //* in this case the broser will refersh the page when we press enter
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    username.push(loginInput.value);
    localStorage.setItem(USERNAME_KEY, JSON.stringify(username));
    paintGreetings(username);
}

function paintGreetings(username) {
    username.forEach(element => {
        console.log(username)
        greeting.innerHTML += `Hello, Mr.${element}`;
    });
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



// titleEl.addEventListener("click", function(event) {
//     titleEl.classList.toggle("active")
// });

