// 객체 (object)

// 객체 리터럴
var person = {
  name: 'Lee',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  }
};

console.log(typeof person); // object
console.log(person); // { name: 'Lee', sayHello: [Function: sayHello] }


// 프로퍼티
var person = {
  name: 'Roy',
  age: 20,
  firstName: 'Tae-min',
  'last-name': 'Lee'
};

console.log(person); // { name: 'Roy', age: 20, firstName: 'Tae-min', 'last-name': 'Lee' }


// 프로퍼티 키 동적 생성
var obj = {};
var key = 'hello';

obj[key] = 'world!';

console.log(obj); // { hello: 'world!' }


// 메서드
var circle = {
  radius: 5, // 프로퍼티
  getDiameter: function () { // 메서드
    return 2 * this.radius;
  }
};

console.log(circle.getDiameter()); // 10


// 프로퍼티 접근
var person = {
  name: 'Lee'
};

console.log(person.name); // 정적 접근
console.log(person['name']); // 동적 접근 (프로퍼티 키는 반드시 따옴표로 감싸준다.)
console.log(person.age); // 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다.


// 프로퍼티 조작
var person = {
  name: 'Lee'
};

// 프로퍼티 값 갱신
person.name = 'Kim';
console.log(person); // { name: 'Kim' }

// 프로퍼티 동적 생성
person.age = 20;
console.log(person); // { name: 'Kim', age: 20 }

// 프로퍼티 삭제
delete person.age;
console.log(person); // { name: 'Kim' }



// ES6에서 추가된 객체 리터럴의 확장 기능

// 1. 프로퍼티 축약 표현
// ES5
var x = 1, y = 2;
var obj = {
  x: x,
  y: y
};

console.log(obj); // { x: 1, y: 2 }

// ES6
let xx = 1, yy = 2;
const obj2 = {xx, yy};
console.log(obj2);


// 2. 계산된 프로퍼티 이름
// ES5
var prefix = 'prop';
var i = 0;

var obj = {};
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // { 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }

// ES6
const prefix2 = 'prop';
let j = 0;

const obj3 = {
  [`${prefix2}-${++j}`]: j,
  [`${prefix2}-${++j}`]: j,
  [`${prefix2}-${++j}`]: j
};

console.log(obj3); // { 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }


// 3. 메서드 축약 표현
// 메서드 정의 시 function 키워드 생략 가능

// ES5
var obj = {
  name: 'Lee',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Lee

// ES6
const obj4 = {
  name: 'Lee',
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

obj4.sayHi(); // Hi! Lee
