// 1. 코드 블럭
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없다.
{
  const a = 'a';
}
console.log(a);
const b = 'b';

// 2. 함수 블럭
// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.
function print() {
  const message = 'Hello World';
  console.log(message);
}
console.log(message);

// 함수 외부에서는 함수의 매개변수 참조 불가
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b);