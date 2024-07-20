// Promise (프로미스)
// JavaScript에서 비동기 작업을 처리하기 위한 내장 객체

// executor() 함수
// executor 함수는 Promise 생성자에 전달되는 함수로, Promise가 생성될 때 즉시 실행된다.


const executor = (resolve, reject) => {
  setTimeout(() => {
    const success = true; // 또는 false
    if (success) {
      resolve("성공");
    } else {
      reject("실패");
    }
  }, 3000);
};

const promise = new Promise(executor);

promise
  .then((res) => {
  console.log(res);
  })
  .catch((err) => {
  console.log(err);
  });