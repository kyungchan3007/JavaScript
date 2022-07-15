function Person(name, age) {
  this.name = name; // public
  let _age = age; // private

  //인스턴스 메서드
  this.sayHi = function () {
    console.log(`Hi my name is ${this.name}. I am ${_age}`);
  };
}

const me = new Person("lee", 20);
me.sayHi();

console.log(me.name);
console.log(me._age);

const Person = (function () {
  let _age = 0; //private
  function Person(name, age) {
    this.name = name; // public
    _age = age;
  }
  //프로토 타입 메서드
  Person.prototype.sayHi = function () {
    console.log(`hi my name is ${this.name}. i am ${_age}`);
  };
  //생성자 함수를 반환
  return Person;
})();

const me = new Person("kim", 30);

me.sayHi();

console.log(me.name);
console.log(me._age);
const you = new Person("kim", 20);
you.sayHi();
console.log(you.name);
console.log(you._age);
