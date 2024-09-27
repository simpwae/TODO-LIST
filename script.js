const btn = document.querySelector("#btn");
const inputBox = document.querySelector("#task_addr");
const tasks = document.querySelector(".tasks");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputBox.value.trim() === "") {
    alert("You haven't written anything.");
    return;
  }

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const label = document.createElement("label");
  label.textContent = inputBox.value;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("complete-btn");
  completeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    label.classList.toggle("completed"); // Toggle completed class
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    tasks.removeChild(taskDiv); // Remove task when delete button is clicked
  });

  taskDiv.append(label, completeBtn, deleteBtn);
  tasks.appendChild(taskDiv);

  inputBox.value = ""; // Clear the input box
});
