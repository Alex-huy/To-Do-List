import { chosenImage } from "./background.js";
const ulEl = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector(".todo-list");
const TODO_KEY = "toDo";

let toDo = [];
const savedToDo = JSON.parse(localStorage.getItem(TODO_KEY));


if (savedToDo !== null) {
    //? shorter than using element keyword, because forEach will automatically add "()" to execute paintToDo function
    savedToDo.forEach(paintToDo);
    //* update what we save previously for next refesh
    toDo = savedToDo;
}



if (chosenImage === "1.jpg") {
    todoInput.classList.add("color-change")
    todoList.classList.add("color-list")
}

//* set localStorage
function saveToDo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDo));
}



function deleteToDo(event) {
    console.dir(event.target)
    const del = event.target.parentElement;
    const delID = del.id;
    console.log (toDo)
    del.classList.toggle("liList");
    setTimeout(function() {
        del.remove()
    }, 2200);
    //* use parseInt because delID is in string type
    console.log(typeof delID)
    //* update toDo array after we delete
    toDo = toDo.filter((element) => element["id"] !== parseInt(delID));
    saveToDo();
}

function paintToDo (newToDo) {
    const liEl = document.createElement("li");
    //* set id for deleting later
    liEl.id = newToDo["id"];
    liEl.className = "appear";
    const spanEl = document.createElement("span");
    // spanEl.id = "list"
    const buttonEl =  document.createElement("button");
    buttonEl.textContent = "🚫"
    buttonEl.id= "deleteBtn"
    buttonEl.addEventListener("click", deleteToDo);
    //* get text property in newToDo object
    spanEl.textContent = newToDo["text"];
    liEl.appendChild(spanEl);
    liEl.appendChild(buttonEl);
    todoList.appendChild(liEl);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = todoInput.value;
    //? we create object to get id for using delete button later
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDo.push(newToDoObj);
    console.log(toDo)
    todoInput.value = ""
    paintToDo(newToDoObj);
    saveToDo();
}

todoForm.addEventListener("submit", handleToDoSubmit);