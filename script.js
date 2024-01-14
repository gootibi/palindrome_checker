const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const palindrome = (str) => {
    let newStr = str.replace(/\W+|_+/g, "").toLowerCase();
    let arr =  newStr.split("");
    return arr.join("") === arr.reverse().join("");
  }

checkButton.addEventListener("click", () => {
    inputText.value === "" ? alert("Please input a value") : null;
    const result = palindrome(inputText.value);
    resultText.innerText = result ? `${inputText.value} is a palindrome` : `${inputText.value} is not a palindrome`;
});