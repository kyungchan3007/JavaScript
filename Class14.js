//클로저의 활용
let num = 0;

const increase = function () {
  return ++num;
};
//======================================

const increase = (function () {
  let num = 0;
  return function () {
    return ++num;
  };
})();
