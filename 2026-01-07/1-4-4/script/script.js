const hero = {
  name: "Batman",
  call() {
    console.log(this.name);
  },
};

// 1. this 손실 (undefined)
const stolenCall = hero.call;
stolenCall();
//손실 이유 : JS에서의 this는 정의 시점이 아닌 호출 시점에 결정, 즉 지금은 window 또는 Global을 가리킨다.
//따라서 hero 객체와의 연결이 끊어진 상태라 undefined 가 나온다.

// 2. bind로 해결하기
const fixedCall = hero.call.bind(hero);
fixedCall(); //결과 : 'Batman'

//setTimeout 안에서 this 잃어버리는 예제
const obj = {
  name: "Lee",
  myName: function () {
    console.log(this.name); //결과 : 'Lee'

    setTimeout(function () {
      console.log(this.name); // 결과 : undefined
    }, 100);
  },
};
//setTimeout 안에서 this 잃어버리는 이유
//화살표 사용 및 bind를 사용하지 않을경우 기본적으로 window를 가리키기 때문에 this를 잃어버린다.
