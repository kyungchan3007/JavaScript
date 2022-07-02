// 스코프
// 스코프란 **자바스크립트 엔진이 참조의 대상이 되는 식별자(Identifier)를 검색할 때 사용하는 규칙의 집합** 이다.
// 즉, 어떤 변수를 사용하거나 함수를 호출하려고 할 때 해당하는 식별자로 사용하는데,그 식별자를 검색하는 메커니즘이라고 이해하면 된다.

function add(x, y) {
  //매게변수 함수 몸체 내부에서만 참조할수 있다.
  // 즉, 매게변수의 스코프는 함수 몸체 내부다.
  console.log(x, y);
  return x + y;
}
add(2, 5);

// console.log(x,y)  ReferenceError: x is not defined

// ReferenceError
let let1 = 1; // 코드 가장 바깥 영역 변수
if (true) {
  let let2 = 2; // 코드 블록 내에서 선언한 변수
  if (true) {
    let let3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
  }
}
console.log(let1); // 1
console.log(let2); // ReferenceError: let2 is not defined
console.log(let3);

// 위코드를 실행하게 되면 let2 라는 변수가 정의되지 않는 변수라고 니오면서 자바스크립트 엔진이 멈추게된다.

let let1 = 1; // 코드 가장 바깥 영역 변수
if (true) {
  let let2 = 2; // 코드 블록 내에서 선언한 변수
  if (true) {
    let let3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
    console.log(let3); //3
  }
  console.log(let2); // 2
}
console.log(let1); // 1

//변수는 자신이 선언된 위치에 의해 자신이 유효한 범위 즉 다른 코드가 변수 자신을 참조할 수 있는 범위가 결정된다. 변수뻐

let global = "global"; //전역변수

function foo() {
  let global = "local"; // 함수 스코프 (함수내에서만 참조할수 있다)
}

// 위코드를 보면 자바스크립트 엔진은 이름이 같은 두 개의 변수 중에서 어떤 변수를 참조해야 할것인지를 결정해야 한다.
// 이를 식별자 결정이라 한다. 스코프를 통해 어떤 변수를 참조해야 할것인지를 결정한다.
