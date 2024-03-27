'use strict';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const todoItemsContainer = document.querySelector('[data-todo-items]');
  let todoList = [];

  const createTodoItemTemplate = (config) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';

    wrapper.innerHTML = `<div class="taskWrapper">
                            <div class="taskHeading">${config.title}</div>
                            <div class="taskDescription">${config.description}</div>
                        </div>`

    return wrapper;
  }
  const appendTodoItem = (element) => {
    todoItemsContainer.append(element);
  }
  const todoListToLocalStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  };

  const todoListFromLocalStorage = () => {
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      todoList = JSON.parse(storedTodoList);
      todoList.forEach(todo => {
        const todoItem = createTodoItemTemplate(todo);
        appendTodoItem(todoItem);
      });
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputs = e.target.querySelectorAll('input, textarea');
    const data = {}

    for (const input of inputs) {
      if (!input.value.trim()) return alert('Lack of data!');
      data[input.name] = input.value
    }

    const todoItem = createTodoItemTemplate(data)
    appendTodoItem(todoItem)
    todoList.push(data);
    todoListToLocalStorage();
    e.target.reset();
  })
  todoListFromLocalStorage();
})()
