const numberPlus = (number) => {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    result = result + i;
    console.log(result, i);
  }
};

const minNumber = (arr) => {
  console.log(Math.min.apply(null, arr));
  return Math.min.apply(null, arr);
};

const forNumber = (arr) => {
  let result,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  result = min;
  console.log(result);
};
let arr = [6, 2, 3, 4, 5];

const dwarf = (arr) => {
  let answer;
  let sum;
  sum = arr.reduce((arr, cur) => {
    return arr + cur;
  });

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  console.log(arr);
};

const capitalLetter = (v) => {
  let result = "";
  for (let x of v) {
    if (x == "A") result += "#";
    else result += x;
  }
  console.log(result);
};

const capitalLetter2 = (v) => {
  let result = "";
  for (let i = 0; i < v.length; i++) {
    if (v[i] === "A") result += "#";
    else result += v[i];
  }
  console.log(result);
};

//A를 모두 샾으로
const capitalLetter3 = (s) => {
  let result = s;
  result = result.replace(/A/g, "#");
  console.log(result);
};

//문자열에 몇개 존재하는지
const findLetter = (v, s) => {
  let count = 0;
  let result = "";
  for (let x of v) {
    if (x === s) count++;
  }
  console.log(count);
};

const findLetter2 = (s, v) => {
  let count = 0;
  let result = "";

  result = s.split(v).length - 1;
  return result;
};

//대문자 갯수 찾기
const capitalLetterFind = (v) => {
  let count = 0;
  for (let x of v) {
    if (x.toUpperCase() === x) count++;
  }
  console.log(count);
};

//대문자 갯수 찾기
// 아스키 코드 대문자 : 65 ~ 90
// 아스키 코드 소문자 : 97 ~ 122
const capitalLetterFind2 = (v) => {
  let count = 0;
  for (let x of v) {
    let num = x.charCodeAt();
    if (num <= 95) count++;
  }
  console.log(count);
};

const latterUppercase = (t) => {
  let result = "";

  for (let x of t) {
    let num = x.charCodeAt();
    if (num > 95) {
      result += x.toUpperCase();
    } else {
      result += x;
    }
  }
  console.log(result);
};

const latterUppercase3 = (t) => {
  let result = "";
  for (let x of t) {
    let num = x.charCodeAt();
    if (num > 96 && num <= 122) result += String.fromCharCode(num - 32);
    else result += x;
  }
  console.log(result);
};

const latterUppercase2 = (t) => {
  let result = "";
  for (let x of t) {
    if (x === x.toLowerCase()) result += x.toUpperCase();
    else result += x;
  }
  console.log(result);
};

// 가장 긴 문장 찾기
const naturlNumber = (arr) => {
  let result;
  let max = 0;
  for (let x of arr) {
    console.log(x.length);
    if (x.length > max) {
      max = x.length;
      result = x;
    }
  }
  console.log(result);
};

const str = ["teacher", "time", "student", "beatiful", "godd"];

// 가운데 문자 출력 : 짝수일때 2개 홀수일때 1개
const substr = (str) => {
  let result = "";

  str.length % 2 === 0
    ? (result = str[str.length / 2 - 1] + str[str.length / 2])
    : (result = str[Math.floor(str.length / 2)]);

  console.log(result);
};

// const overlapStr = (str) => {
//   let result = "";
//   let overlap = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i] === i)) console.log(str[i]);
//   }
// };
// overlapStr("vvfkgkvfs");
