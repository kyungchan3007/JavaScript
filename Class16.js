//스프레드 연산자
const arr = [1, 2, 3];
const max = Math.max(arr); // NaN

const max2 = Math.max(...arr); // 3

const max3 = Math.max.apply(null, arr); // apply 함수의 2번째 배열 arr을 1 , 2 ,3 으로 펼쳐서 Math.max에 전달한다.

//Rset 파라미터는 인수들의 목록을 배열로 전달받는다
function foo(...rset) {
  console.log(rset);
}

//스프레드 문법은 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만든다.
foo(...[1, 2, 3]);
