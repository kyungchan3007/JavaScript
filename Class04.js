

// 삼항 조건 연산자
// 삼함 조건 연산자는 조건식의 평가 결과에 따라 반환할 값을 결정한다. 자바스크립트의 유일한 삼항연산자이며, 부수효과는 없다.
// 삼항 조건 연산자는 첫 번째 피연산자가 true로 평가되며 두 번째 피연산자를 반환하고 , 첫 번째 피연산자가 false로 평가되면 세 번째 피연산자를 반환한다.
// 즉, 삼항 조건 연산자는 두 번째 피연산자를 또는 세번째 피 연산자로 평가되는 표현식이다.

let x = 10;

let result = x % 2 ? "홀수" : "짝수";
console.log(result); // 짝수

//SyntaXError
let errResult = if ( x % 2) {result ="홀수" ;} else {result="짝수"}

// typeof 연산자 
typeof '' // string;
typeof 1 // number
typeof NaN //  number
typeof true // boolean
typeof undefined // undefined
typeof new Date() // object
typeof test/gi // object
typeof function() // function



// 그외의 연산자
? <= 옵셔널체이닝 // ECMAScript2020 에서 도입된 연산자이다. ?. 는 죄항의, 피연산자가 null 또는 undefined인 경우 undefined를반환하고 그렇지 않으면 우항의 프로퍼티 참조로 이어진다.
?? null 병합 연산자 // ECMAScript2020 에서 도입된 ??. null병합 연산자 ?? 는 좌항의 피연산자가 null또는 병합 undefined인 경우 우항의 피연산자를 반환하고 그렇지 않으면 좌항의 피연산자를 반환한다. null 병합 연산자 ?? 는 변수에 기본값을 설정할때 유용하다
delete 프로퍼티 //  delete 연산자는 객체의 프로퍼티를 삭제한다. 이때 delete 연산자의 피연산자는 프로퍼티 값에 접근할수 있는 표현식이어야 한다. 만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시된다.
new // 생성자 함수를 호출할때 사용하며 인스턴스를 생성한다.
instanceof // 좌변의 객체가 우변의 생성자 함수와 연결된 인스턴스인지 반별
in // 프로퍼티 존재확인


// 연산자 우선순의
1, ()
2, new(매게변수존재),[](프로퍼티접근),(함수호출),?.(옵셔널체이닝연산자)
3, new(매개변수 미존재)
4, x++ , x--
5, !x ,+x , ++x , --x delete
6, **(이항 연산자 중에서 우선순위가 가장높다)
7,*,/,%
8, +,-
9,< , <= , > , in , instanceof
10 == , != , === , !==

