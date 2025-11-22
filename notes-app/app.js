let form = document.querySelector("form");
let noteInput = document.getElementById("noteInput");
let noteListUL = document.getElementById("noteList");
let clearBtn = document.getElementById("clearBtn");

let allNotes = getNotes();
console.log(allNotes);
updateNoteList();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let noteText = noteInput.value.trim();
  // console.log(noteText);
  updateNotes(noteText);
  updateNoteList();
  e.target.reset();
});

function createNote(noteText, noteIndex) {
  let note = document.createElement("div");
  note.setAttribute("class", "note");
  note.innerHTML = `<p><b>${noteIndex + 1}.</b>&nbsp;&nbsp;&nbsp;${noteText}</p>
        <div class="actionBtns">
        <button class="editBtn" onclick="editNote(this,${noteIndex})">✏️</button>
        <button class="deleteBtn" onclick="deleteNote(${noteIndex})">❌</button>
    </div>`
  return note;
}
// function editNote(e,noteIndex) {
//   console.log(e.parentElement.previousElementSibling);
//   let p= e.parentElement.previousElementSibling 
//   let editInput=document.createElement('input')
//     editInput.setAttribute("class", "editInput");
//         editInput.value=p.textContent
//     p.replaceWith(editInput)
//         editInput.focus()
//         let updateBtn=document.createElement('button')
//     updateBtn.setAttribute("class", "updateBtn");
//     updateBtn.innerHTML=`<svg fill="#ff2d75" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z"/></svg>`
//     e.replaceWith(updateBtn)

//     function updateNote(){
// p.textContent = editInput.value
//     editInput.replaceWith(p)
//     updateBtn.replaceWith(e)
//         console.log(allNotes[noteIndex]);
        
//        allNotes[noteIndex] = editInput.value
       
//         saveNotes();
//   updateNoteList();
//     }
//     updateBtn.addEventListener('click',updateNote)
    

//      // Add event listener to editInput

//     editInput.addEventListener("keydown", function(event) {
//       if (event.key === "Enter") {
//         updateNote();  // Call the function when Enter is pressed
//       }
//     });


// }
function editNote(e, noteIndex) {
  let p = e.parentElement.previousElementSibling;

  let editInput = document.createElement("input");
  editInput.setAttribute("class", "editInput");
  
  // ✅ Use original value from allNotes
  editInput.value = allNotes[noteIndex];
  
  p.replaceWith(editInput);
  editInput.focus();

  let updateBtn = document.createElement("button");
  updateBtn.setAttribute("class", "updateBtn");
updateBtn.innerHTML=`<svg fill="#ff2d75" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z"/></svg>`

  e.replaceWith(updateBtn);

  function updateNote() {
    const updatedText = editInput.value.trim();
    if (!updatedText) return;

    // Update UI
    const newP = document.createElement("p");
    newP.textContent = `${noteIndex + 1}. ${updatedText}`;
    editInput.replaceWith(newP);
    updateBtn.replaceWith(e);

    // Update storage
    allNotes[noteIndex] = updatedText;
    saveNotes();
    updateNoteList();
  }

  updateBtn.addEventListener("click", updateNote);
  editInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      updateNote();
    }
  });
}

function getNotes() {
  return JSON.parse(localStorage.getItem("noteList")) ?? [];
}

function saveNotes() {
  localStorage.setItem("noteList", JSON.stringify(allNotes));
}

function updateNotes(noteText) {
  allNotes.push(noteText);
  saveNotes();
}

function updateNoteList() {
  noteListUL.innerHTML = "";
  allNotes.forEach((noteText, noteIndex) => {
    let note = createNote(noteText, noteIndex);
    noteListUL.append(note);
  });
}

function deleteNote(noteIndex) {
  allNotes.splice(noteIndex, 1);
  saveNotes();
  updateNoteList();
}
clearBtn.addEventListener("click", () => {
  localStorage.clear("noteList");
  allNotes = getNotes();
  // console.log(allNotes);
  updateNoteList();
});
