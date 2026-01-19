//필요한 요소들 찾아 변수 생성
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const resetBtn = document.querySelector("#reset-btn");
const list = document.querySelector("#todo-list");

// 배열을 저장할 변수 선언
let todos = [];
//데이터 불러오는 함수
function getSaved() {
  const saved = localStorage.getItem("todos");
  //데이터 할당
  todos = saved ? JSON.parse(saved) : [];
}

//함수 호출
getSaved();

//요소 생성 함수
function createTodoItem(todo, index) {
  //생성할 요소들 작성
  const li = document.createElement("li");
  li.classList.add("todo-element");
  const p = document.createElement("p");
  p.classList.add("todo-text");
  p.textContent = todo;

  //요소 내에 삭제 버튼 생성
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.classList.add("delete-button");

  //삭제 이벤트 생성
  deleteBtn.addEventListener("click", () => {
    //삭제전 확인
    if (confirm("정말 삭제할까요?")) {
      //투명화 클래스 삭제(세부 애니메이션 CSS 구현 완료)
      li.classList.remove("block");
      //애니메이션이 끝날때까지 기다리기
      setTimeout(function () {
        todos = todos.filter((_, i) => i !== index); //내가 현재 클릭한 index와 같지 않은 요소만 남기기
        localStorage.setItem("todos", JSON.stringify(todos)); //로컬 스토리지 업데이트
        render(); // 렌더링
      }, 300);
    }
  });
  //요소 추가
  li.appendChild(p);
  li.appendChild(deleteBtn);

  return li;
}

//화면 렌더링
function render() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = createTodoItem(todo, index);
    li.classList.add("block");
    list.appendChild(li);
  });
}

//화면 렌더링 진행
render();

//버튼 클릭시 요소 추가 함수 생성
function addTodo() {
  const text = input.value.trim();
  //아무것도 입력 안되거나 공백만 입력시, 할일 목록 5개 이상일 시 함수 종료
  if (!text || todos.length >= 5) {
    alert("내용을 입력하지 않았거나 할일 목록이 5개 이상입니다.");
    return;
  }

  //입력시 정상적으로 li 생성 및 내용 추가
  todos.push(text); //push() = 배열의 끝에 추가
  localStorage.setItem("todos", JSON.stringify(todos)); //로컬 스토리지 저장

  //li 객체 생성
  const newLi = createTodoItem(text, todos.length - 1);
  list.appendChild(newLi);

  //서서히 나타나는 애니메이션(세부 애니메이션 CSS 구현 완료)
  setTimeout(function () {
    newLi.classList.add("block");
  }, 0);
  input.value = ""; //입력 후 칸 비우기
  input.focus(); //바로 타이핑 가능하게 하기
}

//버튼 클릭시 초기화 함수 생성
function resetTodo() {
  //할일 목록 없으면 함수 종료
  if (!todos.length) {
    alert("할일 목록이 존재하지 않습니다.");
    return;
  }
  //초기화 전 확인
  if (confirm("정말 초기화 할까요?")) {
    //전체 투명화 클래스 제거(세부 에니메이션 CSS 구현 완료)
    const reset = document.querySelectorAll(".todo-element");
    reset.forEach((classReset) => {
      classReset.classList.remove("block");
    });
    //애니메이션이 끝날 때 까지 기다리기
    setTimeout(function () {
      todos = []; //배열 초기화
      localStorage.removeItem("todos"); //로컬 스토리지에서 삭제
      render(); // 화면 업데이트
    }, 300);
  }
}

//버튼 클릭시 추가 이벤트
addBtn.addEventListener("click", addTodo);

//버튼 클릭시 초기화 이벤트
resetBtn.addEventListener("click", resetTodo);

//엔터키 입력시 추가 이벤트
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});
