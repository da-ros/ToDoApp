const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

// create references to page elements
let taskList = document.getElementById('todo-list')
let itemCountSpan = document.getElementById('item-count')
let uncheckedCountSpan = document.getElementById('unchecked-count')
let taskInput = document.getElementById('task')

// add new item to task list
function newTodo() {
  let task = taskInput.value
  // do not add empty string
  if (task.trim()){
    // add new task list item
    let newItem = document.createElement("li")
    let taskText = document.createTextNode(task)
    newItem.appendChild(taskText)
    //count +1 item count
    itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) + 1
    // clear the text input box
    taskInput.value = ""
    // add delete button for each to-do
    let deleteButton = document.createElement("BUTTON")
    deleteButton.onclick=removeTask
    let buttonText = document.createTextNode("Done!")
    deleteButton.appendChild(buttonText)
    newItem.appendChild(deleteButton)
    // add class name to all these buttons
    deleteButton.className = "removeButton"
    taskList.appendChild(newItem)
  }
}

// function to remove each to-do
function removeTask(e){
  // get the parent list item of button to remove, taskItem stores <li> tag and <button>
  let taskItem = e.target.parentElement;
  taskList.removeChild(taskItem)
  //count +1 item unchecked count
  uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1
}
