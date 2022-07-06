// this 바인딩

// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function () {
  console.dir(this); // window
};

//동일한 함수도 다양한 방식으로 호출할수 있다.

//1. 일반 함수 호출
//foo 함수를 일반적인 방식으로 호출
//foo 함수 내부의 this는 전역 객체 window를 가리킨다.
foo();

/*
    2.메서드 호출
    foo 함수를 퍼로퍼티 값으로 할당하여 호출
    foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다.
    
*/
const obj = { foo };
obj.foo();

/*
    생성자 함수 호출
    foo 함수를 new 연산자와 함께 생성자 함수로 호출
    foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
*/
new foo(); //foo{}

const bar = { name: "bar" };
foo.call(bar); // {name: "bar"}
foo.apply(bar); // {name: "bar"}
foo.bind(bar)(); // {name: "bar"}

// 기본적으로 this에는 전역 객체 globar object가 바인딩된다.

function foo() {
  console.log("foo 's this: ", this);
  function bar() {
    console.log("bar's this :", this); // window
  }
  bar();
}
foo();

// 전역함수는 물론이고 중첩함수를 일반함수로 호출하면 함수 내부의 this에는 전역객체가 바인딩된다.
// 객체를 생성하지 않는 일반 함수에는 this는 의미가 없다.
// 따라서 다음 예제처럼 strict mode가 적용된 일반 함수의 내부의 this에는 undefined

function foo() {
  "use strict";
  console.log("foo 's this: ", this);
  function bar() {
    console.log("bar's this :", this);
  }
  bar();
}
foo();

// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
var value = 1;
//const 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티가 아니다.
//const value = 1;

const obj1 = {
  value: 100,
  foo() {
    console.log("foo this? ", this); // {value:100 ,foo:f}
    console.log("foo this.value ", this.value); // 100
    function bar() {
      console.log("bar this? ", this); // window
      console.log("bar this.value", this.value); // 1
    }
    // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역객체가 바인딩된다.
  },
};

obj1.foo();

const obj2 = {
  value: 100,
  foo() {
    console.log("foo this? ", this); // {value:100 ,foo:f}
    // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      console.log("bar this? ", this); // window // this는 전역객체 window 다!
      console.log("bar this.value", this.value); // 1 // window 전역객체이고 프로퍼티로 var value = 1 !
    }, 100);
  },
};

//
obj2.foo();

// setTimeout 함수에 전달된 콜백 함수의 this에는 전역 객체가 바인딩된다. var 키워드로 선언한 전역변수는 전역 객체의 프로퍼티가 되므로 window.value는 1이다.

const obj3 = {
  value: 100,
  foo() {
    const that = this;

    // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      console.log(that.value);
    }, 100);
  },
};

obj3.foo();
