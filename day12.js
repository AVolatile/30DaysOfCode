function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    if (taskInput === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function() {
        this.parentNode.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}