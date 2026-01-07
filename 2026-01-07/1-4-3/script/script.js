"use strict";

//카운터 함수 생성
function createCounter() {
  let count = 0;

  return {
    //count 값 1 증가
    increment() {
      count++;
    },
    //count 값 1 감소
    decrement() {
      count--;
    },
    //count 값 반환
    getCount() {
      return count;
    },
    //count 값 초기화
    reset() {
      count = 0;
    },
  };
}

//함수 저장 변수
const firstCounter = createCounter();
const secondCounter = createCounter();

createCounter.count = 50000; //외부 직접 접근 불가
console.log(`첫 번째 카운터: ${firstCounter.getCount()}`); // 여전히 초기값 0으로 나옴
console.log(`두 번째 카운터: ${secondCounter.getCount()}`); // 마찬가지로 0으로 나옴

//첫번째 변수의 값 1 증가
firstCounter.increment();
//두번째 변수의 값 1 감소
secondCounter.decrement();

//증감 후 결과
console.log(`첫 번째 카운터: ${firstCounter.getCount()}`); //결과 :첫 번째 카운터: 1
console.log(`두 번째 카운터: ${secondCounter.getCount()}`); //결과 :두 번째 카운터: -1

//값 초기화
firstCounter.reset();
secondCounter.reset();

//초기화 후 결과
console.log(`첫 번째 카운터 초기화 후: ${firstCounter.getCount()}`); //결과 :첫 번째 카운터 초기화 후: 0
console.log(`두 번째 카운터 초기화 후: ${secondCounter.getCount()}`); //결과 :두 번째 카운터 초기화 후: 0
