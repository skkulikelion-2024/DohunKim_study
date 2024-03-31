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
  loginUser(id, password, onSucess, onError) {
    setTimeout(() => {
      if (
        (id === "dohun" && password === "1234") ||
        (id === "hi" && password === "0000")
      ) {
        onSucess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSucess, onError) {
    setTimeout(() => {
      if (user === "dohun") {
        onSucess({ name: "dohun", role: "admin" });
      } else {
        onError(new Error("no acess"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();

const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`hello ${userWithRole.name} you have role ${userWithRole.role}`);
      },
      (error) => {
        console.log("error");
      }
    );
  },
  (error) => {
    console.log("error");
  }
);
// 가독성 bad
// 체인 복잡해요
// 체인이 길어질수록 디버깅 난이도 ++
// promise async await
