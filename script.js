function addTask () {
  const inputField = document.getElementById("task-input");
  const listContainer = document.getElementById("task-list");

  let taskText = inputField.value.trim();

  if (taskText === "") {
    alert("Please Add Task!!!");
    return;

  const listItem = document.createElement("li");

  listItem.innerHTML = taskText;
  
  listContainer.appendChild(listItem);

  inputField.value = "";
  }
}
  
