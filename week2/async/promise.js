"use strict";

// 자바스크립트 자제 내장 object : 비동기 작업을 위해 있는

// 1. state: pending -> fulfilled or rejected
// 2. Producer vs Consumer

// 1-1. Producer
const promise = new Promise((resolve, reject) => {
  // 복잡한작업~~ network ~ file ~
  console.log("doing something..."); // 프로미스 객체 생성 즉시 executor 실행 !! 주의할것
  setTimeout(() => {
    // resolve('dohun')
    reject(new Error("no network"));
  }, 2000);
});
// sucess -> resolve
// fail -> reject

// 2-2. consumers: then , catch, finally

promise
  .then((value) => {
    // resolve에 전달된 값 반환
    console.log(console.log(value));
  })
  .catch((error) => console.log(`error caught: ${error}`)) // reject 에 전달된 값 반환
  .finally(() => {
    console.log("finally");
  }); // 성공여부에 상관 없이 실행

// 3. Promise Chaining

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("chicken");
    }, 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Error ${hen} -> Egg`));
    }, 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg} -> 계란후라이`);
    }, 1000);
  });

getHen()
  .then((hen) => getEgg(hen)) // then(getEgg)
  .catch((error) => {
    return "빵";
  })
  .then((egg) => cook(egg)) // then(cook)
  .then((meal) => console.log(meal)) // then(console.log)
  .catch(console.log);
