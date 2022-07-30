// 프로미스 에러처리
const wrongUrl = "https://jsonplaceholder.typicode.com/XXX/1";

promiseGet(wrongUrl).then(
  (res) => console.log(res),
  (err) => console.log(err)
); // Error 404
// 부적절한 URL이 저장되었기 때문에 에러가 난다.
promiseGet(wrongUrl)
  .then((res) => console.log(res))
  .catch((err) => console.error(err)); // Error 404

// 프로미스 체이닝
const url = "https://jsonplaceholder.typicode.com";

// id가 1인 post userId를 취득
promiseGet(`${url}/post/1`)
  .then(({ userId }) => promiseGet(`${url}/users/${userId}`))
  .then((userInfo) => console.log(userInfo))
  .catch((err) => console.error(err));
