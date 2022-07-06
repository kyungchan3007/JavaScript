// This

const cicle1 = {
  // 객체 고유 상태 데이터
  radius: 5,
  // 메서드 : 상태 데이터를 참조하고 조작하는 동작
  getDiameter() {
    // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
    // 자신이 속한 객체의 cicle을 참조할수 있어야한다.
    return 2 * cicle.radius;
  },
};

console.log(cicle.getDiameter());

// getDiameter 메서드 자신이 속한 객체를 가리키는 식별자 cicle을 참조하고 있다. 이 참조 표현식이 평가되는 시점은 getDiameter 메서드가 호출되어 함수
// 몸체가 실행되는 시점이다.

/*
객체의 리터럴은 cicle 변수에 할당되기 직전에 평가된다. 따라서 getDiameter 메서드가 호출되는시점에는 이미 객체 리터럴의 평가가 완료되어 
객체가 생성되었고 cicle 식별자에 생성된 객체가 할당된 이후다. 따라서 메서드 내부에서 cicle 식별자를 참조할수 있다.
*/


// 생성자 함수 방식으로 인스턴스를 생성하는 경우를 생각해보자.

function Cicle(radius){
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  ????.radius = radius;
}

Circle.prototype.getDiameter = function (){
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  return 2 * ????.radius;
}

//생성자함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야한다.
const cicle = new Circle(5);


/*

  생성자 함수를 정의하는 시점에는 아직 인스턴스를 생성하기 이전이므로 생성자 함수가 생성할 인스턴스를 가리키는 식별자를 알 수없다.!
  이를 위해 자바스크립트는 this라는 특수한 식별자를 제공한다.
  
  this 는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
  this 는 자바스크립트 엔신에 의해 암묵적으로 생성되며, 코드 어디서든 참조할 수 있다. 함수를 호출하면  arguments 객체와 this가 암묵적으로 함수 내부에 전달된다. 함수 내부에서 arguments 객체를 지역 변수처럼 사용할 수 있는 것처럼 this도 지역 변수처럼 사용할수 있다.
  단 this가 가리키는 값 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.

*/

const cicle2 = {
  // 객체 고유 상태 데이터
  radius: 5,
  // 메서드 : 상태 데이터를 참조하고 조작하는 동작
  getDiameter() {
    // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
    // 자신이 속한 객체의 cicle을 참조할수 있어야한다.
    return 2 * this.radius;
  },
};

console.log(cicle.getDiameter());
//  객체 리터럴의 메서드 내부에서의 this 는 메서드를 호출한 객체 ,즉 circle을 가리킨다.

function Cicle(radius){

  thisradius = radius;
}

Circle.prototype.getDiameter = function (){

  return 2 * thisradius;
}

const cicle3 = new Circle(5);
console.log(circle.getDiameter());

// 생성자 함수 내부의 this는 생성자 함수가 생성할 인서턴스를 가리킨다. 이처럼 this는 상황에 따라 가리키는 대상이 다르다.


// this는 어디서든지 참조가 가능하다.
// 전역엣더 this는 전역 객체 windowfmf 가리킨다.
console.log(this)// window

function square(number){
  //일반 함수 내부에서 this 는 전역 객체 window를 가리킨다.
  console.log(this) // window
  return number * number
}

const person ={
  name: "lee",
  getName(){
    console.log(this) // {name:"lee" , getNanme:f}
    return this.name
  }
}

console.log(person.getName())

function Person(name){
  this.name = name;
  //생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  console.log(this)
}

const me = new Person("lee"); // Person{name:"lee"}

