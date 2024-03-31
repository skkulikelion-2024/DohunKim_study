// 1. use strict
"use strict";
console.log("Hello World!");

// 2. Variable
// let
let globalName = "global name";
{
  let name = "dohun";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
// console.log(name); // 정의되지 않았기에 출력도 되지 않음
console.log(globalName);

// var 선언도 하기전에 출력이 가능, 값을 할당하는 것도 가능. -> 위험 ++++
// var hoisting
// 블록 스콥 존재하지 않음 -> 블록 안에 선언해도 전역변수로 선언됨.
// 변수 선언할 때에는 반드시 let으로 선언하기.

// 3. const
// 포인터가 잠겨있어 값을 변경할 수 없음.
// immutable data type
// 보안, 안전, 실수에 강점이 있음

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// object -> 파이썬 딕셔너리랑 비슷
// primitive, single item: number, string, boolean, 등등
// number << 숫자 담는 자료형 굳이 앞에 붙여서 선언하지 않아도 됨 -> 자동으로 할당해줌

const count = 17;
const size = 17.1;
console.log(`value : ${count} type : ${typeof count}`);
console.log(`value : ${size} type : ${typeof size}`);

// 특수
const infinity = 1 / 0; // 출력값: Infinity
const negativeInfinity = -1 / 0; // 출력값: -Infinity
const nAn = "not a number" / 2; // 출력값: NaN
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
// ++참고만 할 것. bigInt = 숫자 정의후 뒤에 n 붙이기 ex) 12321312312321123123123123123123213213123123n

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value : ${greeting}, type: ${typeof greeting}`); // string
const helloBob = `hi ${brendan}!`;
console.log(`value : ${greeting}, type: ${typeof greeting}`); // string
// 백틱 사용 -> 파이썬 문자열 포메팅이랑 유사함

// boolean
// false: 0,null, undefined, NaN
// true: 이외 모두
const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type: ${typeof canRead}`); // true boolean
console.log(`value : ${test}, type: ${typeof test}`); // false boolean

//null
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`); //null object

//undefined -> 선언만 하고 값을 할당하지 않은 경우
let x;
console.log(`value : ${x}, type: ${typeof x}`); //undefined undefined

// symbol, 고요한 식별자, 동시다발적인 코드들중에서 우선순위를 주고싶을 때
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); //false
console.log(`value : ${symbol1.description}, type: ${typeof symbol1}`); // id symbol + 값에 접근하고 싶으면 description 반드시 활용

// object
const dohun = { name: "dohun", age: 24 };
dohun.age = 21;
console.log(dohun);
// 5. Dynamic Typing
let text = "hello";
console.log(`value : ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value : ${text}, type: ${typeof text}`); // number
text = "7" + 5;
console.log(`value : ${text}, type: ${typeof text}`); // string
text = "8" / "2";
console.log(`value : ${text}, type: ${typeof text}`); // number




