// const add = (a, b) => a + b;

// const multiply = (a, b) => a * b;

// function calculator(a, b, action) {
//   const result = action(a, b);
//   console.log(result);
//   return result;
// }

// calculator(1, 2, add);
// calculator(1, 2, multiply);

// const result = (max, aciton) => {
//   const add = 3;
//   add.map((number) => {
//     console.log(number);
//   });
// };

const result = (max) => {
  if (max === undefined) {
    return;
  }
  console.log(max);
};

const bbb = () => {
  const aaa = [1, 2, 3];
  aaa.map((number) => {
    console.log(number * 2);
  });
};

result(bbb());
