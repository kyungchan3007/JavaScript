//고차함수 배열

const points = [40, 100, 1, 5, 2, 25, 10];
points.sort();
// [1, 10, 100, 2, 25, 40, 5]

points.sort((a, b) => a - b);
// [1, 2, 5, 10, 25, 40, 100]

points[points.length - 1];
//100

points.sort((a, b) => b - a);
//[100, 40, 25, 10, 5, 2, 1]

const number1 = [1, 2, 3];
const pows1 = [];

for (var i = 0; i < number.length; i++) {
  pows.push(number[i] ** 2);
}
console.log(pows); //[1, 4, 9]

//고차함수
const number2 = [1, 2, 3];
const pows2 = [];

number.forEach((item) => pows.push(item ** 2));
console.log(pows); //[1, 4, 9]

[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소값:${item},인덱스:${index},this:${JSON.stringify(arr)}`);
});

/*
요소값:1,인덱스:0,this:[1,2,3]
요소값:2,인덱스:1,this:[1,2,3]
요소값:3,인덱스:2,this:[1,2,3]
*/

const numbers = [1, 4, 9];
const roots = numbers.map((item) => Math.sqrt(item));
// [1, 2, 3]

const munbers = [1, 2, 3, 4, 5];
const odds = munbers.filter((item) => item % 2);
console.log(odds); // [1, 3, 5]

const sum = [1, 2, 3, 4].reduce(
  (accumulator, cuurentValue, index, array) => accumulator + cuurentValue,
  0
);
console.log(sum);
// 10

const values = [1, 2, 3, 4, 5, 6];
const average = values.reduce((acc, cur, i, { length }) => {
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);
console.log(average); // 3.5
