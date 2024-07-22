// 두 배열 비교하기

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

// 1. 교집합
let intersection = arr1.filter(v => arr2.includes(v));
console.log(intersection); // [3, 4, 5]

// 2. 차집합
let difference = arr1.filter(v => !arr2.includes(v));
console.log(difference); // [1, 2]

// 3. 대칭차집합
let symDifference = arr1.filter(x => !arr2.includes(x))
                        .concat(arr2.filter(x => !arr1.includes(x)));
console.log(symDifference); // [1, 2, 6, 7]