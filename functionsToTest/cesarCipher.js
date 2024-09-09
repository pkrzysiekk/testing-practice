export function cesarCipher(string, num) {
  let cipher = "";
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);

    if (char >= "a" && char <= "z") {
      let newChar = 97 + ((char.charCodeAt(0) - 97 + num) % 26);
      cipher += String.fromCharCode(newChar);
    } else if (char >= "A" && char <= "Z") {
      let newChar = 65 + ((char.charCodeAt(0) - 65 + num) % 26);
      cipher += String.fromCharCode(newChar);
    } else {
      cipher += string.charAt(i);
    }
  }
  return cipher;
}
