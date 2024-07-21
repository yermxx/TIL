// async 키워드 : 항상 Promise를 반환, 비동기 함수를 선언할 때 async 키워드 사용
// await 키워드 : Promise가 처리될 때까지 대기
// 에러 처리 : try-catch 문

// 예제 1
async function fetchData(userId) {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    console.log(data);
} catch (error) {
    console.error('Error fetching data:', error);
}
}

fetchData();


// 예제 2
function getMacbook() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('💻');
    }, 1000);
  });
}

function getAirPods() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🎧');
    }, 3000);
  });
}

function getImac() {
  return Promise.reject(new Error('no iMac'));
}

// 아이템을 같이 가지고 오기
async function fetchItems() {
  const macbook = await getMacbook();
  const airpods = await getAirPods();
  return [macbook, airpods];
}

fetchItems()
  .then((items) => console.log(items));