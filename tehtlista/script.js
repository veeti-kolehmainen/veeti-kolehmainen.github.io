// script.js
let list = document.getElementById("list");
const addButton = document.getElementById("add-button");
const removeButton = document.getElementById("remove-button");

// Function to render the list from localStorage
function renderListFromLocalStorage() {
    const listElements = JSON.parse(localStorage.getItem("listElements")) || [];
    list.innerHTML = "";
    listElements.forEach((element) => {
        renderProductList(element);
    });
}

// Function to render an item
function renderProductList(element) {
    if (element.trim() === "") return;

    const li = document.createElement("li");
    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-danger");
    button.innerHTML = "Remove";
    button.addEventListener("click", () => removeListItem(li), false);
    li.setAttribute("class", "form-control");
    list.appendChild(li);
    li.innerHTML = li.innerHTML + element;
    li.appendChild(button);
}

// Function to add an item to localStorage
function addToLocalStorage(element) {
    const listElements = JSON.parse(localStorage.getItem("listElements")) || [];
    listElements.push(element);
    localStorage.setItem("listElements", JSON.stringify(listElements));
}

// Function to remove an item from the list and localStorage
function removeListItem(item) {
    list.removeChild(item);
    updateLocalStorage();
}

// Function to update localStorage with the current list
function updateLocalStorage() {
    const listItems = Array.from(list.children).map((item) => item.innerText.trim());
    localStorage.setItem("listElements", JSON.stringify(listItems));
}

// Event listener for adding a new item
addButton.addEventListener("click", () => {
    const textInput = document.getElementById("uusiTeht").value;
    renderProductList(textInput);
    addToLocalStorage(textInput);
    document.getElementById("uusiTeht").value = ""; // Clear the input field
});

// Event listener for removing the last item
removeButton.addEventListener("click", () => {
    const lastItem = list.lastElementChild;
    if (lastItem) {
        removeListItem(lastItem);
    }
});

// Initialize the list from localStorage
renderListFromLocalStorage();
