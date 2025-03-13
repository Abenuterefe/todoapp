const input=document.getElementById("taskInput")
function addTask(){
    const task=document.createElement("li")
    const dlt=document.createElement("button")
    const div = document.createElement("div")
    div.className = "todo";
    dlt.className = "dlt";
    dlt.textContent = 'delete task';
    
    if (input.value === "") {
        alert("please insert a task");
      } else {
    
    div.textContent=input.value

    document.getElementById("taskList").appendChild(task)
    task.appendChild(div)
    task.appendChild(dlt)
    input.value=""
    dlt.addEventListener("click", deleteTask);
}}
function deleteTask(event){
    const task = event.target.parentElement;
    task.remove();
}


