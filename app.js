const arrCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  ",",
  "?",
  "!",
  "",
  "_",
  "-",
  "&",
  "@",
  "#",
  "$",
  "%",
  "*",
  "(",
  ")",
  " ",
];

const message = document.querySelector("input#msg");
const key = document.querySelector("input#key");

const encryptBtn = document.querySelector("#encrypt");

const encryptedMsgOutput = document.querySelector(".output h3");

const p = document.querySelector(".output p");

function turnIntoSameLenArrays(message, key) {
  let number1 = [];
  [...message].forEach((character) => {
    number1.push(arrCharacters.indexOf(character));
  });

  let number2 = [];
  [...key].forEach((character) => {
    number2.push(arrCharacters.indexOf(character));
  });

  if (number1.length > number2.length) {
    const difference = number1.length - number2.length;
    for (let i = 0; i < difference; i++) {
      number2.push(number2[i]);
    }
  }

  return [number1, number2];
}

function encryptMessage(message, key) {
  let number1 = turnIntoSameLenArrays(message, key)[0];
  let number2 = turnIntoSameLenArrays(message, key)[1];

  let result = "";
  let sum = [];

  for (let i = 0; i < number1.length; i++) {
    sum.push(number1[i] + number2[i]);
    if (sum[i] > arrCharacters.length) {
      sum[i] = sum[i] % arrCharacters.length;
    }
  }

  for (let i = 0; i < number1.length; i++) {
    result += arrCharacters[sum[i]];
  }

  encryptedMsgOutput.textContent = result;
}

encryptBtn.addEventListener("click", () => {
  p.textContent = "Your ecrypted message:";
  encryptMessage(message.value.toUpperCase(), key.value.toUpperCase());
  // message.value = "";
  // key.value = "";
});

const decryptBtn = document.querySelector("#decrypt");
function dencryptMessage(message, key) {
  const number1 = turnIntoSameLenArrays(message, key)[0];
  const number2 = turnIntoSameLenArrays(message, key)[1];

  let difArr = [];
  for (let i = 0; i < number1.length; i++) {
    difArr.push(number1[i] - number2[i]);
    if (difArr[i] < 0) {
      difArr[i] += arrCharacters.length;
    }
  }

  let result = "";
  for (let i = 0; i < number1.length; i++) {
    result += arrCharacters[difArr[i]];
  }

  encryptedMsgOutput.textContent = result;
}

decryptBtn.addEventListener("click", () => {
  p.textContent = "Your decrypted message:";
  dencryptMessage(message.value.toUpperCase(), key.value.toUpperCase());
});
