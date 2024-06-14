// break 문

// 예제 1
// 레이블 문에서 break 문 사용하기

// foo 라는 식별자가 붙은 레이블 블록문
foo: {
  console.log(1);
  break foo; // foo 레이블 문 탈출
  console.log(2);
}

console.log('Done!');


// 예제 2
// 외부 for문을 탈출하려면 레이블 문을 사용한다.

outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i + j === 3) break outer; // i + j이 3이면 outer 레이블 for 문을 탈출한다.
    console.log(`inner [${i}, ${j}]`);
  }
}
console.log('Done!');


// 예제 3
// 문자열에서 특정 문자 인덱스 검색하기
var string = 'Hello World.';
var search = 'l';
var index;

for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    index = i;
    break; // break 문이 없으면 9가 출력된다.
  }
}
console.log(index);
console.log(string.indexOf(search)); // 해당 메서드를 사용해도 동일한 결과가 출력된다.


// continue 문

// 예제 1
// 문자열에서 특정 문자 개수 세기
var string = 'Hello World.';
var search = 'l';
var count = 0;
var count2 = 0;

for (var i = 0; i < string.length; i++) {
  if (string[i] !== search) continue; // 'l'이 아니면 실행을 중단하고 증감식으로 이동한다.
  count++; // continue 문이 실행되면 증감식은 실행되지 않는다.
}
console.log(count); // 3

for (var i = 0; i < string.length; i++) {
  if (string[i] === search) count2++;
}
console.log(count2); // 3