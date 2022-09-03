// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseleave", function() {
//   console.log("CLICK!!!!");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
  // console.log(input.value)
  if (input.value.length > 0) {
    var li = document.createElement("li"); // you need to create a node first
    li.appendChild(document.createTextNode(input.value)); // then append it to the ul
    ul.appendChild(li);
    input.value = ""; // clear input after submit
  }
})

input.addEventListener("click", function() {
  if (input.value.length > 0 && event.key === "Enter") {
    var li = document.createElement("li"); // you need to create a node first
    li.appendChild(document.createTextNode(input.value)); // then append it to the ul
    ul.appendChild(li);
    input.value = ""; // clear input after submit
  }
})