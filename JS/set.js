// Set: 고유한 값들의 집합을 저장할 수 있는 내장 객체
// 중복값을 허용하지 않는다는 특징이 있다.

// 빈 Set 생성
let mySet = new Set();
// 초기값을 가진 Set 생성
const set = new Set([1, 2, 3]);
console.log(set);

// 1. 크기 확인: size
console.log(set.size);

// 2. 특정 값 확인: has(value)
console.log(set.has(2));
console.log(set.has(6));

// 3. 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 4. 추가: add(value)
set.add(6);
console.log(set);
set.add(6);
console.log(set);

// 5. 삭제: delete(value)
set.delete(6);
console.log(set);

// 6. 전체 삭제: clear()
set.clear();
console.log(set);

// ++ Object Set
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);