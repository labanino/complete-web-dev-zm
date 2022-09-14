var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

// If a button is clicked
button.addEventListener("click", addListAfterClick);

// If input is keypressed
input.addEventListener("keypress", addListAfterKeypress);

function inputLength() {
  return input.value.length;
}

// create list and button elements
function createListElement() {
  var li = document.createElement("li"); // you need to create a node first
  li.appendChild(document.createTextNode(input.value)); // then append it to the ul
  ul.appendChild(li);
  input.value = ""; // clear input after submit

  // mark it as done
  li.addEventListener("click", function () {
    li.classList.toggle("done");

    if (!li.querySelector("button.delete")) {

      //create delete button
      var delete_btn = document.createElement("button");
      delete_btn.innerHTML = "Delete";
      delete_btn.classList.add("delete");
      li.appendChild(delete_btn);

      // removes li when delete button is clicked
      delete_btn.addEventListener("click", function () {
        li.parentNode.removeChild(li);
      });

    } else {
      // li.removeChild(li.querySelector("button.delete"));
      li.removeChild(li.children[0]); // remove delete button when item is toggled
    }

  });

}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
    input.focus(); // cursor stay in input after delete button is clicked
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}