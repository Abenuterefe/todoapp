const input=document.getElementById("taskInput")
function addTask(){
    const task=document.createElement("li")
    const dlt=document.createElement("button")
    const edit=document.createElement("button")
    const div = document.createElement("div")
    div.className = "todo";
    dlt.className = "dlt";
    edit.className = "edit";
    edit.textContent = 'edit task';
    dlt.textContent = 'delete task';
    
    if (input.value === "") {
        alert("please insert a task");
      } else {
    
    div.textContent=input.value

    document.getElementById("taskList").appendChild(task)
    task.appendChild(div)
    task.appendChild(dlt)
    task.appendChild(edit)
    input.value=""
    dlt.addEventListener("click", deleteTask);
    edit.addEventListener("click", editTask);
}}
function deleteTask(event){
    const task = event.target.parentElement;
    task.remove();
}
function editTask(event){
    const task = event.target.parentElement;
    input.value = task.textContent;
    task.remove();
}

