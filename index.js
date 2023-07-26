//=========================== Task 01
function reversStr(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

const oldString = "Bangladesh";
// const result = reversStr(oldString);
// console.log(result);

//=========================== Task 02
function positiveArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

const number = [2, -5, 10, -3, 7];
// const result = positiveArray(number);
// console.log(result);

//=========================== Task 03
function mfNumber(arr) {
  const frequentObj = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    frequentObj[num] = (frequentObj[num] || 0) + 1;
  }
  let mostFrequentNumber;
  let maxCount = 0;
  for (const element in frequentObj) {
    if (frequentObj[element] > maxCount) {
      mostFrequentNumber = element;
      maxCount = frequentObj[element];
    }
  }
  return mostFrequentNumber;
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
// const result = mfNumber(array);
// console.log(result);

//=========================== Task 04
function findTwoSum(arr, targetValue) {
  let left = 1;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === targetValue) {
      return [left, right];
    } else if (sum < targetValue) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

const numberArray = [1, 3, 6, 8, 11, 15];
const targetNumber = 9;
// const indices = findTwoSum(numberArray, targetNumber);
// console.log(indices);

//=========================== Task 05
function calculate(number1, operator, number2) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const oFunction = operations[operator];
  if (oFunction) {
    return oFunction(number1, number2);
  } else {
    return "Invalid operator";
  }
}

const number1 = 5;
const number2 = 3;
const operator = "*";
// const result = calculate(number1, operator, number2);
// console.log(result);

//=========================== Task 06
function randomPassword(length) {
  let password = "";
  const upLatter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowLatter = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = '!@#$%^&*()_-+=[]{}|:;"<>,.?/';

  const totalCharacters = upLatter + lowLatter + number + symbol;

  for (let i = 0; i < length; i++) {
    const takeRandomPass = Math.floor(Math.random() * totalCharacters.length);
    password += totalCharacters[takeRandomPass];
  }

  return password;
}

const passwordLength = 8;
// const result = randomPassword(passwordLength);
// console.log(result);

//=========================== Task 07
function secondLowest(arr) {
  if (arr.length < 2) {
    return "input more then 2 number";
  }
  const arraySort = arr.sort((a, b) => a - b);
  return arraySort[1];
}

const numberOfArray = [4, 5, 1, 7, 8, 3];
// const result = secondLowest(numberOfArray);
// console.log(result);
