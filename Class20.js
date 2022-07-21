// 동기, 비동기 처리
//sleep 함수는 일정시간이 경과한 이후에 골백함수를 호출한다.
function sleep(func, delay) {
  //Date.now() 현재 시간을 숫자(ms)로 반환한다.
  const delayUntill = Date.now() + delay;
  //현재 시간에 delay 를 더한 delayUntill이 현재 시간보다 작으면 계속 반복한다.
  while (Date.now() < delayUntill);
  // 일정시간이 경과한 이후에 콜백함수를 호출한다
  func();
}

function foo() {
  console.log("first");
}

function bar() {
  console.log("second");
}

//비동기 실행 태스크가 종료되지 않아도 bar()함수가 호출
setTimeout(foo, 3 * 1000);
//동기 실행 테스크 종료 이후 bar() 함수 호출
sleep(foo, 3 * 1000);
//foo호출 => bar 호출
bar();
