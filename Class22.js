//프로미스 정적메서드

const resolvePromise1 = Promise.resolve([1, 2, 3]);
resolvePromise.then(console.log);

const resolvedPromise2 = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log);
//[1,2,3]
//위 내용은 아래 내용과 동일하게 동작한다.
const resolvedPromise3 = new Promise.resolve((resolve) => resolve([1, 2, 3]));
resolvedPromise.then(console.log);

//여러 객체를 reject 하는 프로미스를 생성
const rejectPromise = Promise.reject(new Error("Error"));
rejectedPromise.catch(console.log());
// 윈내용은 아래내용과 동일하게 동작한다.

const rejectedPromise = new Promise((_, reject) => reject(new Error("Error")));

const requestData1 = () =>
  new Promise((resolve) => setTimeout(() => resovle(1), 3000));

const requestData2 = () =>
  new Promise((resolve) => setTimeout(() => resovle(1), 2000));

const requestData3 = () =>
  new Promise((resolve) => setTimeout(() => resovle(1), 1000));

Promise.all([requestData(1), requestData(2), request3()])
  .then(console.log) //[1,2,3] => 3초 소요
  .catch(console.error);

const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        // 성공적으로 응답을 전달바등면 ressolve 함수를 호출한다
        resolve(JSON.parse(xhr.response));
      } else {
        // 에러 처리를 위해 reject 함수를 호출한다
        reject(new Error(xhr.status));
      }
    };
  });
};

const gitGubId = ["abc", "def", "hij"];

Promise.all(
  gitGubId.map((id) => promiseGet(`https://api.github.com/users/${id}`))
)
  .then((users) => users.map((user) => user.name))
  .then(console.log)
  .catch(console.error);

Promise.race([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
])
  .then(console.log)
  .catch(console.log);
