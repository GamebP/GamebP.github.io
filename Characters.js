//
//
//
// Characters only !
//
//
//

// Get the length input field
var lengthField = document.getElementById("length_characters");
// Get the length value element
var lengthValue = document.getElementById("length-value_characters");
// Get the button elements
var generateButton = document.getElementById("button_characters");
var copyButton = document.getElementById("copy-button_characters");
// Get the textarea and output elements
var textarea = document.getElementById("textarea_haracters");
var output = document.getElementById("output_characters");

// Define a constant or a variable with a string value containing the characters
const characters = "ㄖ几ㄥㄚ山ㄒ卂Ҝ乇丂ツㅤ卐ㅰㅱصഐᾯண";
// var characters = "abcdefghijklmnopqrstuvwxyz";

// Function to generate a random string of characters
function generateRandomString(characters, length) {
  var result = "";
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Update the length value element when the range input field is changed
lengthField.addEventListener("input", function() {
  lengthValue.innerHTML = lengthField.value;
});

// Generate a random string of characters and update the output and textarea elements when the button is clicked
generateButton.addEventListener("click", function() {
  // Get the length from the input field
  var length = lengthField.value;
  // Generate a random string of characters
  var randomString = generateRandomString(characters, length);
  // Update the output and textarea elements with the generated string
  output.innerHTML = randomString;
  textarea.value = randomString;
  // Enable the copy button
  copyButton.disabled = false;
});

// Copy the generated string to the clipboard when the button is clicked
copyButton.addEventListener("click", function() {
  // Select the textarea element
  textarea.select();
  // Copy the selected text to the clipboard
  document.execCommand("copy");
});

function CopyCharacters() {
  // Get the text from the output element
  const text = document.getElementById("output_characters").textContent;
  
  // Create a temporary input element
  const tempInput = document.createElement("input");
  // Set the value of the input element to the text from the output element
  tempInput.value = text;
  // Append the input element to the body
  document.body.appendChild(tempInput);
  // Select the text in the input element
  tempInput.select();
  // Copy the selected text to the clipboard
  document.execCommand("copy");
  // Remove the input element from the body
  document.body.removeChild(tempInput);
  }
  
//
//
//
// 
//
//
//
