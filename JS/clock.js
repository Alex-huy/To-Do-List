import {chosenImage} from "./background.js";
const clock = document.querySelector("h2#clock");

function getClock(params) {
    const date = new Date();
    let hour = JSON.stringify(date.getHours()).padStart(2, "0");
    let minute = JSON.stringify(date.getMinutes()).padStart(2, "0");
    let second = JSON.stringify(date.getSeconds()).padStart(2, "0");
    //* we use padStart function to add "0" in front of minute, hour, second when they are less than 10
    //! padStart and padEnd are just used for String
    //? we use "2" in the first argument in padStart because when minute or second,.. less than 2 digits, it will add "0" in front of it
    //? if minute or hour,.. is greater than 10, it means thay already have 2 digits so the padStart stop adding "0" in front of it
    //? we can have padEnd, please CHECK IT OUT at the link below.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
    clock.textContent = `${hour} : ${minute} : ${second}`;
}

//* we have to implement ine more getClock because if we refesh the page, it has to wait after 1 second to show 
getClock()
//* setInterval means every after 1 second, programe will call getClock
//? we can try setTimeout but after 1 second, programe only call getClock once
setInterval(getClock, 1000);

if (chosenImage === "0.jfif") {
    clock.classList.add("white-clock")
}
