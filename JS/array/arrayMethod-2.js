// 코테에 자주 나오는 배열 메서드

// forEach(): 배열의 각 요소에 대해 함수를 실행
let arr = [1, 2, 3];
arr.forEach(element => console.log(element));


// map(): 배열의 모든 요소에 대해 제공된 함수를 호출하고, 그 결과를 새로운 배열로 반환합니다.
let arr1 = [1, 2, 3];
let newArr = arr1.map(x => x * 2); 
console.log(newArr); // newArr = [2, 4, 6]


// filter(): 주어진 함수의 조건을 충족하는 모든 요소를 새로운 배열로 반환합니다.
let arr3 = [1, 2, 3, 4, 5];
let newArr2 = arr3.filter(x => x > 2); 
console.log(newArr2); // newArr2 = [3, 4, 5]


// reduce(): 배열의 각 요소에 대해 주어진 함수를 실행하여 하나의 결과값을 반환합니다.
let arr4 = [1, 2, 3, 4, 5];
let sum = arr4.reduce((acc, curr) => acc + curr, 0); 
console.log(sum); // sum = 15


// find(): 주어진 조건을 만족하는 첫 번째 요소를 반환합니다.
let arr5 = [1, 2, 3, 4, 5];
let found = arr5.find(x => x > 3);
console.log(found); // found = 4


// findIndex(): 주어진 조건을 만족하는 첫 번째 요소의 인덱스를 반환합니다.
let arr6 = [1, 2, 3, 4, 5];
let index = arr6.findIndex(x => x > 3);
console.log(index); // index = 3


// some(): 배열 안의 어떤 요소라도 주어진 함수를 만족하는지 테스트합니다.
let arr7 = [1, 2, 3, 4, 5];
let hasElementGreaterThan3 = arr7.some(x => x > 3); 
console.log(hasElementGreaterThan3); // true 


// every(): 배열 안의 모든 요소가 주어진 함수를 만족하는지 테스트합니다.
let arr8 = [1, 2, 3, 4, 5];
let allGreaterThan0 = arr8.every(x => x > 0);
console.log(allGreaterThan0); // true


// includes(): 배열이 특정 요소를 포함하고 있는지 확인합니다.
let arr9 = [1, 2, 3];
let hasTwo = arr9.includes(2);
console.log(hasTwo); // true


// indexOf(): 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 존재하지 않으면 -1을 반환합니다.
let arr10 = [1, 2, 3, 2];
let index2;
index2 = arr10.indexOf(2);
console.log(index2); // 1
index2 = arr10.indexOf(4);
console.log(index2); // -1


// sort(): 배열 요소 정렬
let arr11 = [3, 1, 4, 1, 5];
let res = arr11.sort();
console.log(res); // [1, 1, 3, 4, 5]


// reverse(): 배열의 요소 순서를 반대로 만듭니다.
let arr12 = [1, 2, 3];
let res2 = arr12.reverse();
console.log(res2); // [3, 2, 1]


// join(): 배열의 모든 요소를 문자열로 결합합니다.
let arr13 = [1, 2, 3];
let str = arr13.join('-'); 
console.log(str); // "1-2-3"


// split(): 문자열을 배열로 분할합니다. 배열 메서드는 아니지만, 문자열을 배열로 변환할 때 유용합니다.
let str2 = "1-2-3";
let arr14 = str2.split('-');
console.log(arr14); // [ '1', '2', '3' ]
