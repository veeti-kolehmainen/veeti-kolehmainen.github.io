// This function clears all the values
function clearScreen() {
    document.getElementById("toimitus").value = "";
}
 
function clearAnswer() {
    document.getElementById("laskin").value = "";
}

// This function displays the values
function display(value) {
    document.getElementById("toimitus").value += value;
    if(document.getElementById("laskin").value != null) {
        clearAnswer()
    }
}

function onChange() {
    if(document.getElementById("select").value != "Valitse") {
        display(document.getElementById("select").value)
    }
}

function calculate() {
    var p = document.getElementById("toimitus").value;
    var q = eval(p);
    document.getElementById("laskin").value = q;
}