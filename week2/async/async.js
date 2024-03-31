"use strict";

// async await
// 프로미스 깔끔하게 쓰기

// 1.async

// function fetchUser() {
//   // 10초 걸린다고 가정
//   return new Promise((resolve, reject) => {
//     resolve("dohun");
//   });
// }

async function fetchUser() {
  return "dohun";
} // Promise object 반환

const user = fetchUser(); // 비동기처리 하지 않을시 -> 10초동안 아래 작업이 멈춰버림...
console.log(user);

// 2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000); // async 함수 안에서만 사용 가능 -> 3초 기다려줌-> 3초 뒤에 반환
  return "Apple";
}

async function getBanana() {
  await delay(1100);
  return "Banana";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   }); // 복잡해요
// }

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise; // 서로 기다릴 필요가 없음
  const banana = await bananaPromise; // 프로미스 미리 생성 -> 병렬적으로 사과 바나나 패치
  return `${apple}+${banana}`;
} // 프로미스 객체를 반환

pickFruits().then(console.log);

// 3. useful Promise APIs

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join("+")
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
