let todoForm=document.querySelector('form')
let todoInput=document.getElementById('todoInput')
let todoList=document.getElementById('todoList')
let clearBtn=document.getElementById('clearBtn')

todoForm.addEventListener('submit',function(e){
    e.preventDefault()
    addTask()
})

function addTask(){
    let li=document.createElement('li')
li.innerHTML=`<button class="checkBtn" onclick="doneTask(this)">✔</button>
    <span class="task">${todoInput.value}</span>
    <div class="actionBtns">
        <button class="editBtn" onclick="editTask(this)">✏️</button>
      <button class="deleteBtn" onclick="deleteTask(this)">✖</button>
    </div>`
todoList.append(li)
todoInput.value=''
}

// Delete task when delete btn is pressed
function deleteTask(e){
    console.log(e.closest('li'));
    let parentLi=e.closest('li')
    if (parentLi) {
        parentLi.remove()
    }
    
}

// Mark task as completed by pressing the btn
function doneTask(e) {
    console.log(e.nextElementSibling);
    let task=e.nextElementSibling
      task.classList.toggle('completed')

}

// Edit task by pressing the btn
function editTask(e) {
    console.log(e.closest('li'));
    let parentLi=e.closest('li')
    console.log(parentLi.children[1]);
    let task=parentLi.children[1]
    let editInput=document.createElement('input')
    editInput.setAttribute("class", "editInput");
        editInput.value=task.textContent
    parentLi.replaceChild(editInput,task)
        editInput.focus()

    let updateBtn=document.createElement('button')
    updateBtn.setAttribute("class", "updateBtn");
    updateBtn.innerHTML=`<svg fill="#ff2d75" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z"/></svg>`
    e.replaceWith(updateBtn)

    function updateTask(){
task.textContent = editInput.value
        parentLi.replaceChild(task,editInput)
    updateBtn.replaceWith(e)

    }
    updateBtn.addEventListener('click',updateTask)
    

     // Add event listener to editInput

    editInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        updateTask();  // Call the function when Enter is pressed
      }
    });

    
}

//   Empty todo list when button is pressed 
clearBtn.addEventListener('click',()=>{
    todoList.innerHTML=''
})