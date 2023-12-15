
//elements declareation
const addTaskInput = document.querySelector('#add-task-input')
const addBtn = document.querySelector('#add-btn')
//creating the task box
// add task function
const wrapper = document.querySelector('#wrapper')

function addRemoveTask(){
    const delBtn = document.createElement('button')
    const taskBox = document.createElement('div')
    const checkbox = document.createElement('span')
    if (addTaskInput.value !== ''){
        delBtn.id = 'del-btn'
        taskBox.className = 'taskBox'
        delBtn.innerHTML = 'Delete'
        taskBox.innerHTML = addTaskInput.value
        taskBox.appendChild(checkbox)
        wrapper.appendChild(taskBox)
        taskBox.appendChild(delBtn)
        addTaskInput.value = ''
        
        
        }
        
    delBtn.addEventListener('click', ()=>{
        taskBox.remove()
    })

    taskBox.addEventListener("click", () => {
        taskBox.classList.toggle("green-text");
        taskBox.style.backgroundColor = '#232D3F'
      });
    
}
// checkbox btn

// delete button function
addBtn.addEventListener('click', () => {
    addRemoveTask()
})
// save tasks to local storage






