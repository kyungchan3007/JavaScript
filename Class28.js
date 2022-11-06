const add = function (a, b) {
  return a + b;
  console.log("😶‍🌫️");
};

const aaa = (a, b) => {
  return a + b;
  console.log("🥶");
};

// IIFE 즉각 실행 함수 많이 사용되어지는 함수는 아니지만 바로 실행하고 싶을때 사용한다.
(function add() {
  console.log("☝🏼");
})();
