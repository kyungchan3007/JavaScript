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

const capitalLetter3 = (s) => {
  let result = s;
  result = result.replace(/A/g, "#");
  console.log(result);
};

const findLetter = (v, s) => {
  let count = 0;
  let result = "";
  for (let x of v) {
    if (x === s) count++;
  }
  console.log(count);
};

const capitalLetterFind = (v) => {
  let count = 0;
  for (let x of v) {
    if (x.toUpperCase() === x) count++;
  }
  console.log(count);
};

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

const latterUppercase2 = (t) => {
  let result = "";
  for (let x of t) {
    if (x === x.toLowerCase()) result += x.toUpperCase();
    else result += x;
  }
  console.log(result);
};

latterUppercase2("Orange");
