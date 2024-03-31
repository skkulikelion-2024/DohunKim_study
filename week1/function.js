"use strict";
// 1. Function
// 변수명 지을때 동사로 지으면 좋음
// 함수는 js에서 오브젝트로 분류된다.

function printHello() {
  console.log("HELLO");
}
printHello();

function log(message) {
  console.log(message);
}
log("hallo");

// 2. Parameters
// premitive vs object

function changeName(obj) {
  obj.name = "dohun";
}

const dohun = { name: "oh" };
changeName(dohun);
console.log(dohun.name);

// 3. default parameters
function showMessage(message, from = "unknown") {
  //if (from == undefined) {
  //from = "UNKNOWN";
  //}
  console.log(`${message} by ${from}`);
}
showMessage("hi");

// 4. Rest Parameters
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll("ha", "hu", "ho", "hhu");

// 5.local Scope

let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);
}
printMessage();

// 6.return value
function sum(a, b) {
  return a + b;
}
sum(1, 3); // 4

// 7. early return , early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // logic
  }
}
// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // logic
}

// First-class function

// 1.Function Expression
const print = function () {
  // anonymous fucntion
  console.log("print");
};
print(); //print
const printAgain = print;
printAgain(); //print
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback Function
function randomQuiz(answer, printYes, printNo) {
  if (answer === "hi") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous fucntion
const printYes = function () {
  console.log("yes");
};

// named function 디버깅할때 용이 및 재귀함수 사용
const printNo = function print() {
  console.log("no!");
};

randomQuiz("hi", printYes, printNo); //yes
randomQuiz("hey", printYes, printNo); //no

// arrow function
// anonymous!
const simplePrint = () => console.log("Simple!");
simplePrint();

// IIFE : Immediately Invoked Function Expression
// 잘 쓰이진 않음
(function hello() {
  console.log("IIFE");
})();
