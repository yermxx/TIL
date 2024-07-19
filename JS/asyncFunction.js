// setTimeout() 함수
// 매개변수로 전달받은 시간만큼 기다렸다가, 콜백 함수를 실행시키는 함수

const workOne = () => {
	setTimeout(() => {
		console.log("workOne");
	}, 5000)
};

const workTwo = () => {
	setTimeout(() => {
		console.log("workTwo");
	}, 3000)
};

const workThree = () => {
	setTimeout(() => {
		console.log("workThree");
	}, 10000)
};

const workFour = () => {
		console.log("workFour");
}

workOne();
workTwo();
workThree();
workFour();

// 출력 결과
// workFour -> 동기 함수 (바로 실행)
// workTwo -> 비동기 함수 (3초 후 실행)
// workOne -> 비동기 함수 (5초 후 실행)
// workThree -> 비동기 함수 (10초 후 실행)


// setInterval() 함수
// 일정 시간 간격으로 반복해서 콜백 함수를 실행시키는 함수

setInterval(() => {
    console.log("1초마다 실행됩니다.");
}, 1000);