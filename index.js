//elements declareation
const addTaskInput = document.querySelector('#add-task-input')
const addBtn = document.querySelector('#add-btn')
//creating the task box
// add task function
const wrapper = document.querySelector('#wrapper')

function addRemoveTask(){
    const delBtn = document.createElement('button')
    const checkbox = document.createElement("input")
    const taskBox = document.createElement('div')
    
    if (addTaskInput.value !== ''){
        checkbox.addEventListener("change", () => {
            taskBox.toggle("checked")
        })
        checkbox.type = "checkbox";
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
    
}

// delete button function
addBtn.addEventListener('click', () => {
    addRemoveTask()
})
// save tasks to local storage






