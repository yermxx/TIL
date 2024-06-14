/**
 * 조건문
 * 1. if...else 문
 * 2. switch 문
 */

// if...else 문
// 예제 1
// : if 문 / if... else 문 / if...else if 문

var num = 2;
var kind;

// if 문
if (num > 0) {
  kind = '양수'; // 양수, 음수 구별 불가
}
console.log(kind); // 양수

// if... else 문
if (num > 0) {
  kind = '양수';
} else {
  kind = '음수'; // 0은 음수가 아니다.
}
console.log(kind); // 양수

// if... else if 문
if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind); // 양수

// 예제 2
// : 블록문이 하나라면 중괄호는 생략 가능하다.

var num = 2;
var kind;

if (num > 0) kind = '양수';
else if (num < 0) kind = '음수';
else kind = '영';

console.log(kind); // 양수

// 예제 3
// : '삼항 조건 연산자'를 사용하면 가독성이 높아진다.

// x가 짝수이면 result 변수에 문자열 '짝수'를 할당
// x가 홀수이면 문자열 '홀수'를 할당
var x = 2;
var result;

if (x % 2) { // 2 % 2 = 0 (0은 false로 암묵적 강제 변환된다.)
  result = '홀수';
} else {
  result = '짝수';
}
console.log(result); // 짝수


// 예제 3의 if...else 문을 삼항 연산자로 표현할 수 있다.
var x = 2;
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수


// 예제 2의 if...else if 문을 삼항 연산자로 표현하기
// 삼항 연산자는 값처럼 사용할 수 있기 때문에 변수에 할당할 수 있다.
var num = 2;
var kind = num ? (num > 0 ? '양수' : '음수') : '영'
console.log(kind); // 양수


// switch 문

// 예제 1
var month = 11;
var monthName;

switch(month) {
  case 1: monthName = 'Jan';
    break;
  case 2: monthName = 'Feb';
    break;
  case 3: monthName = 'Mar';
    break;
  case 4: monthName = 'Apr';
    break;
  case 5: monthName = 'May';
    break;
  case 6: monthName = 'Jun';
    break;
  case 7: monthName = 'Jul';
    break;
  case 8: monthName = 'Aug';
    break;
  case 9: monthName = 'Sep';
    break;
  case 10: monthName = 'Oct';
    break;
  case 11: monthName = 'Nov';
    break;
  case 12: monthName = 'Dec';
    break;
  default: monthName = 'Invalid month';
}
console.log(monthName); // Nov


// 예제 2
// : 윤년 계산 알고리즘 맛보기

var year = 2000;
var month = 2;
var days = 0;

switch(month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
    break;
  case 2:
  // 1. 연도가 4로 나누어떨어지는 해: 윤년 (2000, 2004, 2008, 2012...)
  // 2. 연도가 400으로 나누어떨어지는 해: 윤년 (2000, 2400, 2800...)
  // 3. 연도가 4로 나누어떨어지고, 100으로도 나누어떨어지는 해 : 평년 (2000, 2100, 2200...)
  // 그러므로 윤년이 되려면 (4로 나누어떨어짐 + 100으로 나누어떨어지지 않음) or (4로 나누어떨어지지 않음 + 100으로 나누어떨어짐)이 되어야 함.
    days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28; // && : AND 연산자, || : OR 연산자
    break;
  default:
    console.log('Invalid month');
}

console.log(days);