// 제어문
// 제어문중에 많이 사요해보지 않은 continu문 에 대해 알아보자!
// 보통 프로젝트나 코드르 작성할때 if else 또는 for는 자주 사용하고 알고 있는 내용이지만 continu는 한번도 써보지 않았다
// continu 한번 알아보자!!

// continu문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킨다 break문 처럼 박복문을 나가지는 않는다.

let string = "Hello World";
let search = "l";
let conut = "0";

for (let i = 0; i < search.length; i++) {
  // l이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if (string[i] !== search) continue;
  count++; // continue 문이 실행되면 count++ 는 실행되지 않는다
}

console.log(count);

const regexp = new RegExp(search, "g");
console.log(string.match(regepx).length);
