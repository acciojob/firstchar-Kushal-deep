function firstChar(text) {
  // Trim the string to remove leading and trailing spaces
  const trimmedText = text.trim();

  // Check if the trimmed string is empty
  if (trimmedText.length === 0) {
    return ""; // Return an empty string
  }

  // Return the first character of the trimmed string
  return trimmedText[0]; 
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));