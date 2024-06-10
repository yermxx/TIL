// 배열을 수정하는 메서드
// push(): 배열의 끝에 하나 이상의 요소를 추가
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);  // [1, 2, 3, 4]

// pop(): 배열의 마지막 요소를 제거하고 그 요소를 반환
let arr2 = [1, 2, 3];
let lastElement = arr2.pop();
console.log(lastElement); // 3
console.log(arr2); // [1, 2]

// shift(): 배열의 첫 번째 요소를 제거하고 그 요소를 반환
let arr3 = [1, 2, 3];
let firstElement = arr3.shift();
console.log(firstElement); // 1
console.log(arr3); // [2, 3]

// unshift(): 배열의 시작 부분에 하나 이상의 요소를 추가
let arr4 = [1, 2, 3];
arr4.unshift(0);
console.log(arr4); // [0, 1, 2, 3]

// splice(): 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
let arr5 = [1, 2, 3, 4, 5];
arr5.splice(2, 1, 'a', 'b');
console.log(arr5); // [1, 2, 'a', 'b', 4, 5]

// some(): 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];
let result;
result = products.some((item) => item.name==='🍪');
console.log(result); // true

// every(): 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name==='🍪');
console.log(result); // false



// 배열을 반환하는 메서드 => 순수 함수
// slice(): 배열의 일부를 선택하여 새로운 배열 생성
const arr6 = [1, 2, 3, 4, 5];
let res;

res = arr6.slice(2);
console.log(res); // [3, 4, 5]

res = arr6.slice(1, 3); // 끝인덱스 - 1
console.log(res); // [2, 3]

// concat(): 두 개 이상의 배열을 합쳐서 새로운 배열을 반환
let arrNum = [1, 2];
let arrNum2 = [3, 4];
let numArr = arrNum.concat(arrNum2);
console.log(numArr); // [1, 2, 3, 4]

// map(): 배열의 모든 요소에 대해 제공된 함수를 호출하고, 그 결과를 새로운 배열로 반환
let arr7 = [1, 2, 3];
let newArr = arr7.map(x => x * 2);
console.log(newArr); // [2, 4, 6]

// flatMap(): 배열의 각 요소에 callback 함수를 적용한 후 결과를 평탄화하여 새로운 배열 반환
const sentences = ["Hello world", "How are you"];
const words = sentences.flatMap(sentence => sentence.split(' '));
console.log(words); // ["Hello", "world", "How", "are", "you"]

// filter(): 주어진 함수의 조건을 충족하는 모든 요소를 새로운 배열로 반환
let arr8 = [1, 2, 3, 4, 5];
let newArr2 = arr8.filter(x => x > 2);
console.log(newArr2); // [3, 4, 5]

// reduce(): 배열의 각 요소에 대해 주어진 함수를 실행하여 하나의 결과값을 반환
let arr9 = [1, 2, 3, 4, 5];
let sum = arr9.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// find(): 주어진 조건을 만족하는 첫 번째 요소를 반환
let arr10 = [1, 2, 3, 4, 5];
let found = arr10.find(x => x > 3);
console.log(found); // 4

// findIndex(): 주어진 조건을 만족하는 첫 번째 요소의 인덱스를 반환
let arr11 = [1, 2, 3, 4, 5];
let index = arr11.findIndex(x => x > 3);
console.log(index); // 3



// 배열 정렬 및 변형 메서드
// sort(): 배열의 요소를 정렬 - 오름차순 (기본적으로 요소를 문자열로 변환하여 비교)
let arr12 = [3, 1, 4, 1, 5];
arr12.sort();
console.log(arr12);  // [1, 1, 3, 4, 5]

// reverse(): 배열의 요소를 정렬 - 내림차순
let arr13 = [1, 2, 3];
arr13.reverse();
console.log(arr13); // [3, 2, 1]
