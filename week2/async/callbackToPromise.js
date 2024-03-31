"use strict";

//  JS is synchronous. 동기적으로 실행된다.
//  hoisting 이후 순차적으로 실행

console.log("1");
setTimeout(() => {
  // 대표적인 비동기 함수
  console.log("2"); // not 동기
}, 1000);
console.log("3");

// 결과 1,3,2

// synchronous Callback (동기적 콜백)
// Asynchronous Callback (비동기적 콜백)

function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); // 비동기

// 콜백 지옥 예시

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (
          (id === "dohun" && password === "1234") ||
          (id === "hi" && password === "0000")
        ) {
          resolve(id);
        } else {
          reject(new Error("invalid input"));
        }
      }, 2000)
    );
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "dohun") {
          resolve({ name: "dohun", role: "admin" });
        } else {
          reject(new Error("no acess"));
        }
      }, 2000);
    });
  }
}
const userStorage = new UserStorage();

const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`${user.name} role is ${user.role}`))
  .catch((error) => console.log(`error error! : ${error}}`));
