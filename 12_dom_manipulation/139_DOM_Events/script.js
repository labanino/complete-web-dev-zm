var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li"); // you need to create a node first
  li.appendChild(document.createTextNode(input.value)); // then append it to the ul
  ul.appendChild(li);
  input.value = ""; // clear input after submit
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

// If a button is clicked
button.addEventListener("click", addListAfterClick);

// If input is keypressed
input.addEventListener("keypress", addListAfterKeypress);