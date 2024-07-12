// Set
const set = new Set ([1, 2, 3]);
console.log(set); // Set(3) { 1, 2, 3 }

// 1. 사이즈 확인
console.log(set.size); // 3

// 2. 값 확인
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// 3. 순회
// 3-1. forEach 메서드
set.forEach((item) => console.log(item)); // 1 2 3
// 3-2. for...of 루프
for (const value of set.values()) {
  console.log(value); // 1 2 3
}

// 4. 값 추가
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }

// 5. 값 삭제
set.delete(6);
console.log(set); // Set(3) { 1, 2, 3 }

// 6. 값 전체 삭제
set.clear();
console.log(set); // Set(0) {}