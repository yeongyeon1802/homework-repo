"use strict";

//querySelector로 선택할 요소들
const myName = document.querySelector(".profile-name");
const card = document.querySelector(".profile-card");
const btn = document.querySelector(".toggle-btn");

//초기값 지정
myName.textContent = "이영연";
btn.textContent = "🌞";

//데이터셋 설정
card.dataset.userId = "123";

//버튼 클릭시 이벤트 지정
btn.addEventListener("click", () => {
  card.classList.toggle("dark-mode");

  const isDark = card.classList.contains("dark-mode");

  myName.textContent = isDark ? "홍길동" : "이영연";
  btn.textContent = isDark ? "🌙" : "🌞";

  console.log(`data-user-id=${card.dataset.userId}`);
});

//새로운 요소 추가
const tag = document.createElement("span");
tag.textContent = "개발자";
card.appendChild(tag);
