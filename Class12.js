const x = 1;

function outerFunc() {
  const x = 10;
  function innerFunc() {
    console.log(x);
  }

  innerFunc();
}
outerFunc();

function outerFunc() {
  const x = 10;
}

function innerFunc() {
  console.log(x);
}

innerFunc();

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x);
}
foo();
bar();
