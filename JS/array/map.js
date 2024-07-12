// Map

// 1. 배열 순회
// 1-1. forEach 메서드
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
// 1-2. for...of 루프
for (const value of map.values()) {
  console.log(value);
}

// 2. 값 찾기
console.log(map.get('key1'));

// 3. 값 추가
map.set('key3', '🍇');
console.log(map);

// 4. 값 삭제
// map은 'key'를 이용해서 값을 찾고, 삭제할 수 있음 (고유성)
map.delete('key3');
console.log(map);

// 5. 값 전체 삭제
map.clear();
console.log(map);

// + 객체(Object)와의 차이점
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };

const obj = {
  [key]: milk,
};
const map2 = new Map([[key, milk]]);

console.log(obj);
console.log(map2);

// 객체(Object)와 map은 각각 사용할 수 있는 함수가 다르다!
console.log(obj[key]);
console.log(map2.get(key));