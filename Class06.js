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

let let2 = 1; // 코드 가장 바깥 영역 변수
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

// 스코프의 종륲

let x = "global x"; // 전역변수
let y = "global y"; // 전역변수

function outer() {
  let z = "outer's local z"; // 지역 스코프 (함수내에서만 참조할수 있다)

  console.log(x); // global x
  console.log(y); // global y
  console.log(z); // outer's local z;

  function inner() {
    let x = "inner's local x"; // 지역 in 지역 스코프 (함수내에서만 참조할수 있다)

    console.log(x); // inner's local x
    console.log(y); // global y
    console.log(z); // outer's local z
  }

  inner();
}

outer();

console.log(x); // global x
console.log(z); // ReferenceError z is not defined

// 이처럼 모든 스코프 하나의 계층적 구조로 연결되며 모든 지역의 최상의 스코프는 저역스코프다
// 이렇게 스코프가 계층적으로 연결된 것을 스코프 체인이라 한다.
// 스코프 체인은 최상위 스코프인 전역 스코프 , 전역에서 선언된 outer 함수의 지역스코프 outer 함수 내부에서 선언된 inner 함수의 지역 스코프로 이뤄진다.

// 변수를 참조할때 자바스크립트 엔진은 스코프체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위스코프 방향으로 이동하며 선언된 변수를 검색한다. 이를 통해 상위 스코프에서 선언한 변수를 하위스코프에서도 참조할수 있다.

var g = 1;
if (ture) {
  // var키워드로 선언된 변수는 함수의 코드 블록(함수 몸체) 만을 지역 스코프로 인정한다.
  // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
  // 따라서 x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x변수는 중복 선언된다.
  // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다
  var g = 10;
}
console.log(g);

var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i); // 0,1,2,3,4
}
console.log(i); // 5

// var 키워드로 선언된 변수는 블록레벨 스코프를 인정하지 않기 때문에 i변수는 전역변수가 된다. 따라서 전역변수i는 중복선언되었고 그 결과 의도치 않은 변수의 값이 할당된다.

//렉시컬 스코프
var s = 1;
function foo() {
  var s = 10;
  bar();
}

function bar() {
  console.log(s);
}

//자바 스크립트는 렉시컬 스코프를 따르므로 함수를 어디서 호출했는지가 아니라 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다. 함
// 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다. 즉 , 함 수의 상위 스코프는 언제나 자신이 정의된 스코프다.
// 이처럼 함수의 상위 스코프는 함수 정의가 실행될 때 정적으로 결정된다
