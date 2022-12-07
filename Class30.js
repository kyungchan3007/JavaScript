const isFirstSolution = (a, b, c) => {
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) answer = c;

  return answer;
};

const sy = (a, b, c) => {
  let answer = "yes",
    max;
  let sum = a + b + c;
  console.log(sum, " sum");
  if (a > b) {
    max = a;
    console.log(max, "a");
  } else {
    max = b;
    console.log(max, "b");
  }
  if (c > max) max = c;
  console.log(max, "c");
  if (sum - max <= max) answer = "no";
  console.log(answer, "answer");
  return answer;
};

//  1다스에 12 학생 한명당 1개씩 불필요한 코드를 찾야하는데
const isPencil = (students) => {
  let pencil = 12;
  let box = 1;
  if (students >= pencil) {
    console.log(Math.ceil(students / pencil));
    return Math.ceil(students / pencil);
  } else {
    return box;
  }
};

const isNaturalNumber = (number) => {
  let temp = 0;
  for (let i = 1; i <= number; i++) {
    temp = temp + i;
  }
  console.log(temp, "temp");
};

const isMininum = (arr) => {
  console.log(Math.min.apply(null, arr));
};

const solution = (arr) => {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  console.log(min);
  for (let i = 0; i < num.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  console.log(answer, "solution");
  return answer;
};
const num = [10, 3, 4, 2, 7, 8, 5];

const numberFunc = (arr) => {
  let temp = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      temp.push(arr[i]);
    }
  }
  temp.reduce((acc, cur) => {
    console.log(acc + cur);
    return acc + cur;
  });
};

const aaa = [12, 77, 38, 41, 53, 92, 85];

const carNumber = (car, day) => {
  let answer = 0;
  let carArr = new Array();

  const days = day.toString()[1];

  const num1 = Number(days);

  for (let x of car) {
    if (x % 10 === num1) {
      carArr.push(x);
      answer++;
    }
  }
  return answer;
};

const car = [25, 23, 12411, 11347, 23517, 33];
carNumber(car, new Date().getDate());
