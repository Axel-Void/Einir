function addTask () {
  const inputField = document.getElementById("task-input");
  const listContainer = document.getElementById("task-list");

  let taskText = inputField.value.trim();
  if (taskText === "") {
    alert("Please Add Task!!!");
    return;
  }
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span>${taskText}</span>
    <button class = "delete-btn"> X </button>
  `;
  const deleteButton = listItem.querySelector(".delete-btn")
  deleteButton.addEventListener("click", function(){
    listContainer.removeChild(listItem);                             
  })
  
  listContainer.appendChild(listItem);
  inputField.value = "";
}
  
