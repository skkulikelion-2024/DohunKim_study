"use strict";
// 1. String Concatenation
console.log("my" + "cat"); // my cat
console.log("1" + 2); // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // 3

// 2.numeric operators
//(생략)

// 3. Increment and decrement

let counter = 2;
counter = ++counter;
console.log(counter); //3
counter = counter++;
console.log(counter); //3

// 4. Assingment operators

// += *= 등등

// 5. Comparision operators

// >= > < =

// 6. Logical operators: ||, &&, !

const value1 = true;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`); // 단순할 수록 앞에 배치하여 연산시간 최소화.

console.log(`or: ${value1 && value2 && check()}`); // 마찬가지 false 등장하면 그 뒤는 확인 xx

const check = () => {
  for (let i = 0; i < 10; i++) {
    console.log("hi");
  }
  return true;
};

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// 타입을 변경해서 확인
console.log(stringFive == numberFive); // T
console.log(stringFive != numberFive); // F

// 타입 변경하지 않고 확인
// 아래 방식을 주로 선호
console.log(stringFive === numberFive); // F
console.log(stringFive !== numberFive); // T

const dohun1 = { name: "dohun" };
const dohun2 = { name: "dohun" };
const dohun3 = dohun1; // 3 과 1 은 같은 ref을 가짐.

console.log(dohun1 == dohun2); //f
console.log(dohun1 === dohun2); //f
console.log(dohun1 === dohun3); //t

console.log(0 == false); //T
console.log(0 === false); //F
console.log("" == false); //T
console.log("" === false); //F
console.log(null == undefined); //T
console.log(null === undefined); //F

// 8. Conditional operators: if
let name = "dohun";
if (name === "dohun") {
  console.log("hello dohun!");
} else {
  console.log("unknown");
}

// 9. Ternary operator 삼항 연산자. 코드 가독성이 떨어질 수 있음.

console.log(name === "dohun" ? "yes" : "no");

// 10. switch
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("nono");
    break;

  case "chrome":
    console.log("good");
    break;

  default:
    console.log("same all");
    break;
}

// 11. loops
// while loop

let i = 3;
while (i > 0) {
  console.log(`while ${i}`);
  i--;
}

for (let i = 3; i > 0; i = i - 2) {
  console.log(`for ${i}`);
}
for (let i = 3; i > 0; i--) {
  for (let j = 3; j > 0; j--) {
    console.log(`for ${i} and ${j}`);
  }
}

// Q1
for (let i = 0; i < 11; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

//Q2
for (let i = 0; i < 11; i++) {
  console.log(i);
  if (i == 8) {
    break;
  }
}
