//얕은복사 주소값 참조
let profile = {
  name: "철수",
  age: 13,
  school: "다람쥐초등학교",
};
let friendprofile = profile;
profile.name = "영희";

console.log(friendprofile, profile);

// 깊은복사
const profile = {
  name: "철수",
  age: 13,
  school: "다람쥐초등학교",
  like: {
    one: "사탕",
    two: "초콜릿",
  },
};

const myfriendprofile = {
  name: profile.name,
  age: profile.age,
  school: profile.school,
  like: profile.like,
};

JSON.stringify(profile);
// '{"name":"철수","age":13,"school":"다람쥐초등학교","like":{"one":"사탕","two":"초콜릿"}}'
JSON.parse(JSON.stringify(profile));
// {name: '철수', age: 13, school: '다람쥐초등학교', like: {…}}

const myCopy = JSON.parse(JSON.stringify(profile));
//{name: '철수', age: 13, school: '다람쥐초등학교', like: {…}}
