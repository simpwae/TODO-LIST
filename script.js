// let btn = document.querySelector("#btn");
// let tasks = document.querySelector(".tasks");

// btn.addEventListener("click", () => {
//   let inputBox = document.querySelector("#task_addr");

//   tasks.append(inputBox.value);
// });
// if (inputBox.trim() === "") {
//         alert("You haven't written anything.");
//         return;
//       }
const btn = document.querySelector("#btn");
const inputBox = document.querySelector("#task_addr");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  //   if (inputBox.value.trim() === "") {
  //     alert("You haven't written anythin");
  //   }

  console.log(inputBox.value);

  const addEle = document.createElement("input");
  addEle.setAttribute("class", "inputt");
  addEle.type = "checkbox";
  const label = document.createElement("label");
  label.setAttribute("for", "inputt");
  // console.log(addEle);
  label.textContent = inputBox.value;
  const tasks = document.querySelector(".tasks");
  tasks.append(addEle, label, "\n");
});
// addEle.textContent = `${inputBox.value} `;
