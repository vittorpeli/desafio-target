function reverseString(str) {
  const chars = [];
  for (let i = 0; i < str.length; i++) {
    chars.push(str[i]);
  }

  let reversedString = "";
  for (let i = chars.length - 1; i >= 0; i--) {
    reversedString += chars[i];
  }

  return reversedString;
}

const originalString = "Hello, world!";

const reversedString = reverseString(originalString);
console.log(reversedString);