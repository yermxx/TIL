// 자주 쓰이는 Math 메서드

// 1. 절대값
// Math.abs(): 절대값을 반환
let num = -5;
console.log(Math.abs(num)); // 5


// 2. 최대값, 최소값
// Math.max(): 주어진 숫자들 중 가장 큰 값을 반환 (최대값)
// Math.min(): 주어진 숫자들 중 가장 작은 값을 반환 (최소값)
let a = 10, b = 20, c = 30;
console.log(Math.max(a, b, c)); // 30
console.log(Math.min(a, b, c)); // 10


// 3. 내림, 올림, 반올림
// Math.floor(): 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환 (내림)
// Math.ceil(): 주어진 숫자보다 크거나 같은 가장 작은 정수를 반환 (올림)
// Math.round(): 주어진 숫자를 반올림하여 가장 가까운 정수를 반환 (반올림)
// Math.trunc(): 소수점 이하를 버리고 정수 부분만 반환
num = 3.14159;
console.log(Math.floor(num)); // 3
console.log(Math.ceil(num));  // 4
console.log(Math.round(num)); // 3
console.log(Math.trunc(num)); // 3


// Math.floor()과 Math.trunc()의 차이
// 양수일 때는 두 메서드가 동일하게 작동하여 소수점 이하를 버리지만, 음수의 경우 차이가 발생한다.
// Math.floor()는 다음으로 작은 정수로 내리고, Math.trunc()는 단순히 소수점 이하를 버린다.
console.log(Math.floor(-3.1)); // -4
console.log(Math.floor(-3.8)); // -4
console.log(Math.trunc(-3.1)); // -3
console.log(Math.trunc(-3.8)); // -3


// 4. 제곱, 제곱근
// Math.pow(base, exponent): base의 exponent 제곱 값을 반환
// Math.sqrt(): 주어진 숫자의 제곱근을 반환
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4


// 5. 난수
// Math.random(): 랜덤값으로 0 이상 1 미만의 난수를 반환
console.log(Math.random());