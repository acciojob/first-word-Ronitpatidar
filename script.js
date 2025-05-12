function firstWord(s) {
  // Trim any leading or trailing whitespace
  let trimmedStr = s.trim();

  // If the string is empty after trimming, return an empty string
  if (trimmedStr === '') return '';

  // Find the index of the first space
  const spaceIndex = trimmedStr.indexOf(' ');

  // If there is no space, return the entire string
  if (spaceIndex === -1) {
    return trimmedStr;
  }

  // Otherwise, return the substring from the start to the first space
  return trimmedStr.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
