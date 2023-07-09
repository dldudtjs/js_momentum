const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //중요한 정보를 담지 않거나 string일 때 변수이름을 대문자로 작성
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 브라우저가 이벤트에 대한 기본 동작을 막음
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm 숨김
  // input값을 username 변수에 저장
  const username = loginInput.value;
  // username 변수값을 localStorage에 USERNAME_KEY와 함께 저장
  localStorage.setItem(USERNAME_KEY, username);
  // paintGreetings함수를 호출, input값을 인자로 넣음
  paintGreetings(username);
}

function paintGreetings(username) {
  //const username =  localStorage.getItem(USERNAME_KEY);

  // input 값을 받고, h1에 "Hello 유저명" 텍스트 입력
  greeting.innerText = `Hello ${username}`;
  // HIDDEN_CLASSNAME을 지우고 h1을 화면에 출력
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// USERNAME_KEY를 가지고 localStorage 확인(null or inpur 값)
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // username의 입력
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // paintGreetings 함수가 localStorage로부터 유저정보를 받음
  paintGreetings(savedUsername);
}
