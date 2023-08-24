const list = document.querySelectorAll("li").length
const progressBar = document.getElementById("progress")
const progressBarMax = 30
const progressPercent = document.querySelector(".progressPercent")

progressBar.value = list
progressPercent.innerText = Math.round((list / progressBarMax) * 100) + "%"
console.log(list)