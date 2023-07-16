const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)) // 클릭하지 않은 다른 toDo는 남기기
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("p");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "✖";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // valuer가 비워지기 전 저장
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // newTodo를 array(=toDos)에 넣기
  paintToDo(newTodoObj); // paintToDo 에게 보내기 = 화면에 띄움
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHallo(item) {
//   console.log("this is the trn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //   parsedToDos.forEach(sayHallo);
  //   parsedToDos.forEach((item) => console.log("this is the turn of ", item));
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}


