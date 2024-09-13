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
    document.cookie = `todos=${JSON.stringify(todos)}; path=/`;
  }

  function loadTodoList() {
    const cookies = document.cookie.split(";");
    const todoCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("todos=")
    );

    if (todoCookie) {
      const todoList = JSON.parse(todoCookie.split("=")[1]);
      console.log(todoList);
      todoList.reverse().forEach((task) => addTodo(task));
    }
  }
});
