//object.assign

const obj = { apple: 1 };
const target = Object.assign({}, obj);

//{apple:1}

const obj = { apple: 1 };
const obj1 = { orange: 1 };
const obj2 = { lemon: 1 };
const obj3 = { mango: 1 };
const target = Object.assign({}, obj, obj1, obj2, obj3);

const obj = { apple: 1 };
const obj1 = { orange: 1 };
const obj2 = { orange: 2 };
const obj3 = { mango: 1 };
const target = object.assign({}, obj, obj1, obj2, obj3);

let user = {
  name: "Chan",
  school: "다람쥐초등학교",
};

let clone = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
for (let key in user) {
  clone[key] = user[key];
}

let user = {
  name: "Chan",
  school: "햇님마을초등학교",
};

let clone = Object.assign({}, user);
bn;
