function finishTask(checkbox) {
    let task = checkbox.closest('li');
    task.remove();
}

function addTask(event) {
    event.preventDefault();
    const inputTask = event.target.task;
    const textTask = inputTask.value.trim();

    console.log("Oi");
    console.log(textTask);

    if (textTask === '') {
        alert("Task needs a title");
        return
    }
     
    const newTaskHTML = `
    <li>
        <input type="checkbox" onclick="finishTask(this)"/>
        <span>${textTask}</span>
    </li>
    `;
    document.querySelector("#todo-list")
            .insertAdjacentHTML('beforeEnd', newTaskHTML.trim());

    inputTask.value = '';

  }
  
  const form = document.getElementById("form-add-todo");
  form.addEventListener("submit", addTask);