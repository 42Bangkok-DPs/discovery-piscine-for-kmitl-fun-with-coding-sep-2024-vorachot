$(document).ready(function () {
  loadTodoList();

  $("#new_task").click(function () {
    const task = prompt("Enter a new TO DO:");
    if (task) {
      addTodo(task);
      saveTodoList();
    }
  });

  function addTodo(task) {
    const todoItem = $("<div></div>")
      .addClass("todo-item")
      .text(task)
      .click(function () {
        const confirmDelete = confirm("Do you want to remove this TO DO?");
        if (confirmDelete) {
          $(this).remove();
          saveTodoList();
        }
      });

    $("#ft_list").prepend(todoItem);
  }

  function saveTodoList() {
    const todos = [];
    $(".todo-item").each(function () {
      todos.push($(this).text());
    });
    const encodedTodos = encodeURIComponent(JSON.stringify(todos));
    document.cookie = `todos=${encodedTodos}; path=/`;
  }

  function loadTodoList() {
    console.log(document.cookie);
    const cookies = document.cookie.split(";");
    console.log(cookies);
    const todoCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("todos=")
    );

    if (todoCookie) {
      const todoList = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));
      console.log(todoList);
      todoList.reverse().forEach((task) => addTodo(task));
    }
  }
});
