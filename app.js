const button = document.getElementById("btn");

// console.log(button.textContent);

function changeColour() {
  document.body.style.background = "teal";
}

button.addEventListener("click", changeColour);
