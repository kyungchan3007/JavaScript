//자바 스크립트는 하나의 숫자 타입만존재한다.
let integer = 10; // 정수
let double = 10.12; // 실수
let negative = -20; // 음의정수

/*
    자바스크립트는 2진수 8진수 16진수를 표현하기 위한 데이터 타입을 제공하지 않기 때문에 이들값을 참조하면 모두 10진수로 해석된다.
*/

let binary = 0b01000001; // 2진수
let octal = 0o101; // 8진수
let hex = 0x41; // 16진수

// 표기법만 다를뿐 모두 같은 값이다.

/*
    자바스크립트의 숫자 타입은 정수만을 위한 타입이 없고 모든 수를 실수를 처리한다. 이는 정수로 표시해도 된다 해도 사실은 실수라는것을 의미한다.
    따라서 정수로 표시되는 수끼리 나누더라도 실수가 나올수 있다.
*/

if (1 === 1.0) {
  // true
  console.log(true);
} else {
  console.log(false);
}

/*
숫자타입은 추가적으로 세가지 특별한 값도 표현할수 있다.
*/

let infinity = 10 / 0; // 양의무한대
let mfinity = 10 / -0; //음의무한대
let nan = 1 * "string"; // Nan 자바스크립트 엔진은 NaN , Nan, nan 을 값이 아닌 식별자로 해석한다.

/*
    문자열 타입은 텍스트 데이터를 나타내는 데 사용한다. 문자열은 0개의 이상의 16비트 유니코드 문자(UTF-16) 의 집합으로 전 세계 대부분의 문자를 표현할 수 있다.
*/

/*
    undifined 타입의 값은 undefined 가 유일하다 
    키워드로 선선안 변수는 암묵적으로 undefined로 초기화된다. 메모리 공간을 처음 할당이 이뤄질때 까지 자바스크립트 엔진이 undifined로 초기화 해버린다.
    변수를 선언한 이후 값을 할당하지 않는 변수를 참조하면 undifined가 반환된다.
    변수를 참조 했을때 undefined가 반환된다면 참조한 변수가 선언 이후 값이 할당된 적이 없는 즉 초기화되지 않은 변수라는 것을 간파할수 있다.
*/

let aaa;
console.log(aaa); // undefined

/*
    null타입의 값은 null 타입이 유일하다. 
    null은 변수에 값이 없다는것을 의도적으로 명시 할때 사용한다. 변수에 null을 할당하는 것은 변수가 이전에 참조하던 값을 더이상 참조하지 않겠다는 의미다.
*/

let foo = "lee";
foo = null;

/*
    함수가 유효한 값을 반환할 수 없는 경우 명시적으로 null을 반환하기도 한다. 
    예를 들어 HTML 요소를 검색해 반환하는 document.querySelector 
    메서드는 조건에 부합하는 HTML 요소를 검색할수 없는 경우 null을 반환한다.

*/

/*
    심벌 타입
    심벌 ES6 추가된 7번째 타입으로 변경 불가능한 원시타입의 값이다.
    심벌 값은 다른값과 중복 되지 않는 유일무이한 값이다. 
    따라서 주로 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.
*/

// return
let key = Symbol("key");
console.log(typeof key); // symbol

// 객체생성
let obj = {};
obj[key] = "value";
console.log(obj[key]); //value;
// 객체타입

/*
    표현식 삽입 문자열 연산자 + 를 사용해 연결하수 있다. + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.
    그외의 경우는 덧셈 연산자로 동작한다.
*/

let first = "Ung-mo";
let last = "lee";

//ES5 : 문자열 연결
console.log("My name is" + first + " " + last + ".");

//ES6 : 문자열 연결
console.log(`My name is ${first} + ${last}.`); // ${} 표현식은 평가 결과과 문자열이 아니더라도 문자열로 타입이 강제로 변환되어 삽입된다.

/*
    동적 , 정적

    자바스크립트는 정적타입 언어와 다르게 변수를 선언할때 타입을 선언하지 않는다. 다만 
    var , let , const, 키워드를 사용해 변수를 선언할 뿐이다. 자바스크립트 언어는 미리 선언한 데이터 타입의 값만 할당할
    수 있는 것이 아니다.
    
*/

var bbb;
console.log(typeof bbb); // undifined
bbb = 3;
console.log(typeof bbb); // number
bbb = "Hello World";
console.log(typeof bbb); // string
bbb = true;
console.log(typeof bbb); // boolean
bbb = false;
console.log(typeof bbb); // boolean
bbb = null;
console.log(typeof bbb); // object
bbb = Symbol();
console.log(typeof bbb); // symbol
bbb = {};
console.log(typeof bbb); // object 객체
bbb = [];
console.log(typeof bbb); // object 배열
bbb = function () {};
console.log(typeof bbb); // function 함수

/*
    주의 : 
    변수는 꼭 필요한 겨우에 한해 제한적으로 사용한다. 
    동적 타입 언어인 자바스크립트는 타입을 잘못 예측해 오류가 발생할 가능성이 크다.
    변수의 개수가 많으면 많을수록 오류가 발생할 확률도 높아진다.

*/
