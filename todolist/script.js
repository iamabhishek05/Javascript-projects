
const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");
const addButton = document.querySelector(".add-button");

const addTask = () => {

    let task = inputBox.value.trim();
    if(task){

        let li = document.createElement("li");
        li.innerHTML = task;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
        saveData();
    }
}


addButton.addEventListener("click", addTask);

listContainer.addEventListener("click", (event) =>{

    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function loadData(){
    if(localStorage.getItem("data")){
        listContainer.innerHTML = localStorage.getItem("data");
    }
}

loadData();