/**
 * 반복문
 * 1. for 문
 * 2. while 문 
 * 3. do...while 문
 */

// for 문
// 예제 1
for (var i = 0; i < 2; i++) {
  console.log(i);
}

// 예제 2
for (var i = 1; i >= 0; i--) {
  console.log(i);
}

// 예제 3: 중첩 for 문
// 두 개의 주사위를 던졌을 때, 두 눈의 합이 6이 되는 모든 경우의 수 구하기
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) 
    console.log(`[${i}, ${j}]`);
  }
}


// while 문
// 예제 1
var count = 0;

while (count < 3) { // count가 3보다 작을 때까지 코드 블록 반복 실행
  console.log(count);
  count++;
}

// 예제 2
var count = 0;

while (true) { // 무한 루프 발생
  console.log(count);
  count++;
  if (count === 3) break; // if 문으로 count가 3일 때 종료하는 조건을 만들어주면 된다.
}


// do...while 문
// 예제
var count = 0;

do {
  console.log(count);
  count++
} while (count < 3);