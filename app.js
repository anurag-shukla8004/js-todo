// SELECTORS
// localStorage.clear();
const todoInput = document.querySelector(".todo-input");
const todoSubmit = document.querySelector(".todo-submit");
const todoList = document.querySelector(".todo-list");
const todoAll = document.querySelector(".todo-all");
const todoDone = document.querySelector(".todo-done");
const todoTodo = document.querySelector(".todo-todo");
const todoRecycle = document.querySelector(".todo-recycle");
const todoRe = document.querySelector(".todo-re");
const todoBin = document.querySelector(".todo-bin");
const todoContainer = document.querySelector(".todo-container");

// Event lisnear

todoSubmit.addEventListener("click", addTodo);
todoSubmit.addEventListener("click", all);
todoList.addEventListener("click", deleteCheck);
todoList.addEventListener("click", edit);
todoRe.addEventListener("click", deleteCheck);
todoAll.addEventListener("click", all);
todoDone.addEventListener("click", done);
todoTodo.addEventListener("click", untodo);
todoRecycle.addEventListener("click", recycle);

//FUNCTIONS
// *************************************    function Addtodo
function addTodo(e) {
  e.preventDefault();
  // div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // li
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = `${todoInput.value}`;
  todoDiv.appendChild(newTodo);

  //  completeButton
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  const saveButton = document.createElement("button");
  saveButton.innerText = "save";
  saveButton.classList.add("save-btn");
  saveButton.style.display = "none";
  todoDiv.appendChild(saveButton);
  const save = document.querySelector(".save-btn");
  // Edit button
  const editButton = document.createElement("button");
  editButton.innerHTML = '<i class="fas fa-edit"></i>';
  editButton.classList.add("edit-btn");
  todoDiv.appendChild(editButton);

  // TrashButton
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // append to list
  todoList.appendChild(todoDiv);

  // clear todo input value
  todoInput.value = "";
}

// function edit btn
function edit(e) {
  const item = e.target;
}

// *******************************************    function DELETE and CHECK

function deleteCheck(e) {
  const item = e.target;
  console.log(item);

  const todoValue = item.parentElement.children[0].innerText;
  const todo = item.parentElement;

  if (item.classList[0] === "save-btn") {
    todoSubmit.style.display = "block";
    item.parentElement.childNodes[1].style.display = "block";
    item.parentElement.childNodes[2].style.display = "none";
    item.parentElement.childNodes[3].style.display = "block";
    item.parentElement.childNodes[4].style.display = "block";
    document.getElementById("saveIndex").value = todoInput.value;
    item.parentElement.childNodes[0].innerText =
      document.getElementById("saveIndex").value;
    todoInput.value = "";
  }
  if (item.classList[0] === "edit-btn") {
    // edit btn
    todoSubmit.style.display = "none";

    console.log(item.parentElement.childNodes);
    item.parentElement.childNodes[1].style.display = "none";
    item.parentElement.childNodes[2].style.display = "block";
    item.parentElement.childNodes[3].style.display = "none";
    item.parentElement.childNodes[4].style.display = "none";

    var livalue = item.parentElement.children[0].innerText;
    todoInput.value = livalue;

    item.parentElement.children[0].innerText = "";
  }

  // delete btn
  if (item.classList[0] === "trash-btn") {
    // deleter todo

    // ***********************************************************
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoValue;
    todoDiv.appendChild(newTodo);

    //  completeButton
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-arrow-left"></i>';
    completeButton.classList.add("complete-btnre");
    todoDiv.appendChild(completeButton);

    // TrashButton
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btnre");
    todoDiv.appendChild(trashButton);

    // append to list
    todoRe.appendChild(todoDiv);

    // ************************************************************
    const Todo = item.parentElement;
    Todo.classList.add("fall");
    Todo.addEventListener("transitionend", function () {
      Todo.remove();
    });
  }
  // Recycle bin delete
  if (item.classList[0] === "trash-btnre") {
    const Todo = item.parentElement;
    Todo.classList.add("fall");
    Todo.addEventListener("transitionend", function () {
      Todo.remove();
    });
  }
  // Left arrow
  if (item.classList[0] === "complete-btnre") {
    console.log("hello");
    const valueRe = item.parentElement.children[0].innerText;
    // **************************************************
    // div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = valueRe;
    todoDiv.appendChild(newTodo);

    //  completeButton
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    const saveButton = document.createElement("button");
    saveButton.innerText = "save";
    saveButton.classList.add("save-btn");
    saveButton.style.display = "none";
    todoDiv.appendChild(saveButton);
    const save = document.querySelector(".save-btn");

    // Edit button
    const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add("edit-btn");
    todoDiv.appendChild(editButton);

    // TrashButton
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // append to list
    todoList.appendChild(todoDiv);

    const Todo = item.parentElement;
    Todo.classList.add("fall");

    Todo.addEventListener("transitionend", function () {
      Todo.remove();
    });

    // **************************************************
  }
  // function Check
  if (item.classList[0] === "complete-btn") {
    const Todo = item.parentElement;
    Todo.classList.toggle("completed");
  }
}

// ************************************************** function ALL DONE TODO RECYCLE

function all() {
  todoBin.style.display = "none";
  todoContainer.style.display = "flex";

  const All = todoList.childNodes;

  All.forEach((todo) => {
    todo.style.display = "flex";
  });
}

function done(e) {
  todoBin.style.display = "none";
  todoContainer.style.display = "flex";

  const done = todoList.childNodes;

  done.forEach((todo) => {
    if (todo.classList.contains("completed")) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
}

function untodo(e) {
  todoBin.style.display = "none";
  todoContainer.style.display = "flex";
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    if (!todo.classList.contains("completed")) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
}

function recycle() {
  todoBin.style.display = "flex";
  todoContainer.style.display = "none";
}
