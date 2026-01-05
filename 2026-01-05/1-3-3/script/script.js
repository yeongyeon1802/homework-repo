"use strict";

const buttonGroup = document.querySelector(".button-group");

//클릭 이벤트용 함수 선언
function handleClick(e) {
  //closest을 사용한 버튼을 찾는 변수 선언
  const btn = e.target.closest("button");

  //if 조건문: 버튼이 아닐 경우 -> 함수 종료
  if (!btn) return;

  //dataset을 사용한 action의 값을 읽는 변수 선언
  const action = btn.dataset.action;
  //버튼 클릭시 해당하는 dataset.action 값 표시
  console.log(`Action: ${action}`);

  //switch-case 문으로 data-action 값 찾아보기
  switch (action) {
    case "add":
      console.log(`"Add Clicked"`);
      break;
    case "edit":
      console.log(`"Edit Clicked"`);
      break;
    case "delete":
      console.log(`"Remove Clicked"`);
      break;
  }
}

//부모에 이벤트 리스너 추가
buttonGroup.addEventListener("click", handleClick);
