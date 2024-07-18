// 'Prototype'이란?
// 객체가 다른 객체로부터 속성과 메서드를 상속받을 수 있도록 하는 메커니즘이자,
// 클래스의 인스턴스에서 사용할 수 있는 메서드

// 프로토타입 상속 예시
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};
const amy = new Person('Amy');
amy.greet();  // "Hello, my name is Amy"


// 객체 리터럴을 사용해 생성된 객체 역시 프로토타입을 가진다.
const obj = {
  a: 1,
  b: 2
};
console.log(obj.__proto__ === Object.prototype);  // true


// 프로토타입 메서드
// 1. Object.getPrototypeOf: 객체의 프로토타입을 반환
const proto = Object.getPrototypeOf(amy);
console.log(proto === Person.prototype);  // true


// 2. Object.setPrototypeOf: 객체의 프로토타입을 설정
const obj2 = {};
Object.setPrototypeOf(obj2, Person.prototype);
obj2.greet = function() {
  console.log('Hello');
};


// 3. Function.prototype: 모든 함수 객체가 상속받는 프로토타입 객체. 이를 통해 함수 객체에 공통적인 메서드나 속성 추가 가능.
// 3-1. Function.prototype.call: 함수를 호출하면서 this 값을 지정. 추가로 전달된 인수들을 함수에 넘여준다.
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}
const person = {
  name: 'John'
};
greet.call(person);  // "Hello, my name is John"

// 3-2. Function.prototype.apply: call 메서드와 유사하지만, 인수를 배열로 받는다는 차이가 있다.
function greet(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}
const boy = {
  name: 'Matthew'
};
greet.apply(boy, ['Hi', '!']);  // "Hi, my name is Matthew!"

// 3-3. Function.prototype.bind: 새로운 함수를 생성하여 this 값과 초기 인수를 설정
function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}
const girl = {
  name: 'Jessica'
};
const greetings = greet.bind(girl);
greetings('Hey');  // "Hey, my name is Jessica"


// 프로토타입 체인
function A() {}
A.prototype.aMethod = function() {};

function B() {}
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

const bInstance = new B();
bInstance.aMethod();  // A의 메서드를 호출

