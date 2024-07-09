// reduce 메서드 사용 시 초기값 정리

const numList = [10, 20, 30, 40, 50];

// 덧셈 (+) : 초기값 0
let res = numList.reduce((a, b) => a + b, 0);
console.log(res);

// 뺄셈 (-) : 첫 번째 원소를 초기값으로 사용 
res = numList.reduce((a, b) => a - b);
console.log(res);

// 곱셈 (*) : 초기값 1
res = numList.reduce((a, b) => a * b, 1);
console.log(res);

// 나눗셈 (/) : 첫 번째 원소를 초기값으로 사용 
res = numList.reduce((a, b) => a / b);
console.log(res);

// 최소값(min) : 초기값 'Infinity'
res = numList.reduce((a, b) => Math.min(a, b), Infinity);
console.log(res);

// 최대값(max) : 초기값 '-Infinity'
res = numList.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(res);