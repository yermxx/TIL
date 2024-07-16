// Iterable: 'Symbol.iterator' 메소드를 구현하여 반복(iteration)이 가능한 객체

// for...of : 배열 순회 가능
const array = [1, 2, 3];
for(const item of array) {
  console.log(item);  // 1 2 3
}

// 배열의 요소들을 이터레이터 객체로 반환하는 메서드
// array.values(): 배열의 각 요소 값을 포함하는 새로운 배열 이터레이터 객체를 반환 (배열 값 순회)
for(const item of array.values()) {
  console.log(item);  // 1 2 3
}

// array.keys(): 배열의 각 인덱스를 포함하는 새로운 배열 이터레이터 객체를 반환 (배열 인덱스 순회)
for(const item of array.keys()) {
  console.log(item);  // 0 1 2
}

// array.entries(): 배열의 각 인덱스-값 쌍을 포함하는 새로운 배열 이터레이터 객체를 반환. (배열의 인덱스와 값 쌍 순회)
// [index, value] 형태의 배열로 출력된다.
for(const item of array.entries()) {
  console.log(item);  // [ 0, 1 ] [ 1, 2 ] [ 2, 3 ]
}

// 프로토콜 규격사항을 따르지 않는 일반 객체
const obj = { 0: 1, 1: 2 };
for (const item in obj) { // for...in: key를 출력
    console.log(item); // 0 1
}

// next() 메서드 사용 예시
const iterator = array.values();
console.log(iterator.next());
console.log(iterator.next().value); // value로 접근하면 값만 출력
console.log(iterator.next());
console.log(iterator.next().done); // done 값만 출력 가능


// for...연산자는 이렇게 작동된다고 보면 된다. (이렇게도 사용할 순 있지만, 추천은 하지 X)
const iterator2 = array.values();
while(true) {
  const item = iterator2.next();
  if(item.done) break;
  console.log(item.value);
}