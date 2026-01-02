"use strict";

//querySelector 방식
const btn = document.querySelector("#myBtn");

//버튼에 텍스트 및 클래스 추가
btn.textContent = "BUTTON(querySelector)";
btn.classList.add("btnClass");

//콘솔로 요소들 확인
console.log(btn.tagName);
console.log(btn.id);
console.log(btn.className);
console.log(btn.parentElement.tagName);
console.log(btn.children.length);

//버튼 클릭시 화면에 출력할 요소 미리 생성
const firstP = document.createElement("p");
// 버튼 클릭시 화면에 요소 출력
btn.addEventListener("click", () => {
  firstP.textContent = `tagname: ${btn.tagName}, id:${btn.id}, parent: ${btn.parentElement.tagName}`;
  document.body.appendChild(firstP);
});

//querySelectorAll 방식
const btnAll = document.querySelectorAll("#myBtnAll");

//foreach 메서드를 통해 각각 요소에 접근
btnAll.forEach((btnSelect) => {
  //버튼에 텍스트 및 클래스 추가
  btnSelect.textContent = "BUTTON(querySelectorAll)";
  btnSelect.classList.add("btnClassAll");

  //콘솔로 요소들 확인
  console.log(btnSelect.tagName);
  console.log(btnSelect.id);
  console.log(btnSelect.className);
  console.log(btnSelect.parentElement.tagName);
  console.log(btnSelect.children.length);

  //버튼 클릭시 화면에 출력할 요소 미리 생성
  const secondP = document.createElement("p");
  // 버튼 클릭시 화면에 요소 출력
  btnSelect.addEventListener("click", () => {
    secondP.textContent = `tagname: ${btnSelect.tagName}, id:${btnSelect.id}, parent: ${btnSelect.parentElement.tagName}`;
    document.body.appendChild(secondP);
  });
});
