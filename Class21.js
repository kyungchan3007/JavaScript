const get = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 서버의 응답을 콜백 함수에 전달하면서 호출하여 응답에 대한 후속 처리르 한다.
      callback(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

const url = "https://jsonplaceholder.typicoe.com/posts/1";

// id가 1인 post userId를 취득
get(`${url}/post/1`, ({ userId }) => {
  console.log(userId);
  // post의 userId를 사용하여 user 정보를 취득
  get(`${url}/users/${userId}`, (userInfo) => {
    console.log(userInfo); //  {id: 1 name: "Leanne Graham", username:"Bret"}
  });
});

/*
  {id: 1 name: "Leanne Graham", username:"Bret"}
*/

//callbakc헬
get("/step1", (a) => {
  get(`/step2/${a}`, (b) => {
    get(`/step3/${b}`, (c) => {
      get(`/step4/${c}`, (d) => {
        console.log(d);
      });
    });
  });
});

// id가 1인 post userId를 취득
get(`${url}/post/1`, ({ userId }) => {
  console.log(userId);
  // post의 userId를 사용하여 user 정보를 취득
  get(`${url}/users/${userId}`, (userInfo) => {
    console.log(userInfo); //  {id: 1 name: "Leanne Graham", username:"Bret"}
  });
});

const promise = new Promise((resolve, reject) => {
  // 비동기처리 성공
  resolve;

  // 비동기 처리 실패
  reject;
});

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
//promiseGet함수는 Promise를 반환한다
promiseGet("https://jsonplaceholder.typicoe.com/posts/1");

new Promise((resolve) => resolve("fulfilled")).then(
  (v) => console.log(v),
  (e) => console.error(e)
);

new Promise((_, reject) => reject(new Error("rejected"))).then(
  (v) => console.log(v),
  (e) => console.error(e)
);

new Promise((_, reject) => reject(new Error("rejected"))).catch((e) =>
  console.log(e)
);

new Promise(() => {}).finally(() => console.log("finally"));

const promiseGet1 = (url) => {
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
//promiseGet함수는 Promise를 반환한다
promiseGet("https://jsonplaceholder.typicoe.com/posts/1")
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => console.log("bye"));
