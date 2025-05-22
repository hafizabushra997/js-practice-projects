let completedCheckbox = document.getElementById("checkCompleted");
let pendingCheckbox = document.getElementById("checkPending");
let li = Array.from(document.getElementsByTagName("li"));
console.log(li);

li.forEach((e) => {
  e.style.display = "none";
});

// This is my old code
// function filterTask() {
//     li.forEach((e) => {
//     if (completedCheckbox.checked == true && e.dataset.status === "completed") {
//       e.style.display = "block";
//       console.log('completed');    
//     }
//     else if (pendingCheckbox.checked == true && e.dataset.status === "pending") {
//       e.style.display = "block";
//             console.log('pending');
//     }
//     else{
//               e.style.display = "none";

//     }
//     });
    
// }

// New Version maintainable code
function filterTask() {
  li.forEach((e) => {
    const isCompleted = e.dataset.status === "completed";
    const isPending = e.dataset.status === "pending";

    if (
      (completedCheckbox.checked && isCompleted) ||
      (pendingCheckbox.checked && isPending)
    ) {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
}
