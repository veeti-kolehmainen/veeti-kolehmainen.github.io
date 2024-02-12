const h1Text = document.getElementById("h1Text");
const image = document.getElementById("image");
const btnContainer = document.getElementById("button-container");
const noBtn = document.getElementById("noButton");
const yesBtn = document.getElementById("yesButton");

yesBtn.addEventListener("click", () => {
  h1Text.innerText = "Yippee!!! >w<";
  image.style.display = "inline-block";
  btnContainer.style.display = "none";
});

noClicks = 0;
noBtn.addEventListener("click", () => {
  noClicks += 1;
  switch (noClicks) {
    case 1:
      noBtn.innerText = "Really?";
      break;
    case 2:
      noBtn.innerText = "Are you sure?";
      break;
    case 3:
      noBtn.innerText = "Are you 100% sure?";
      break;
    case 4:
      noBtn.innerText = "please";
      break;
    case 5:
      noBtn.innerText = "im begging";
      break;
    case 6:
      noBtn.innerText = ":(";
      break;
    case 7:
      noBtn.innerText = "fine.";
      break;
    case 8:
      noBtn.innerText = "yes! :3";
      noBtn.classList.remove("btn-danger");
      noBtn.classList.add("btn-success");
      yesBtn.style.fontSize = "52px";
      noBtn.style.fontSize = "52px";
      break;
    case 9:
      h1Text.innerText = "Yippee!!! >w<";
      image.style.display = "inline-block";
      btnContainer.style.display = "none";
      break;
    default:
      noBtn.innerText = "no >:(";
  }
});
