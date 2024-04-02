//from the html
var inputValue = ""; // Declare inputValue in the global scope

function getValue() {
  var inputElement = document.getElementById("inputword");
  inputValue = inputElement.value;
  alert("The value entered is: " + inputValue);
  console.log("inside function:", inputValue); // Logging inside the function
}

getValue(); // Call getValue() to set the value of inputValue
console.log("outside function:", inputValue);

module.exports = { inputValue };
