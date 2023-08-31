const container = document.querySelector(".task-holder");
const input = document.querySelector(".task-input");

function CreateTask() {
    if (input.value.trim().length > 0) {
        const task = document.createElement("li");
        task.innerText = input.value;
        task.classList.add("task");
        container.append(task);

        let remove = document.createElement("span")
        remove.innerText = "\u00d7"
        remove.onclick = function () {
            Remove(task);
        };
        remove.classList.add("task-remove")
        task.append(remove)

        let complete = document.createElement("span")
        complete.innerText = "\u2705"
        complete.classList.add("task-complete")
        complete.onclick = () => {
            task.style.textDecoration = "line-through";
        }
        task.append(complete)
    }
}

function Remove(task) {
    task.remove()
}

input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        e.preventDefault()
        CreateTask()
        input.value = ""
    }
});
