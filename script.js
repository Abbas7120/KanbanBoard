const todo=document.querySelector('#todo')
const progress=document.querySelector('#progress')
const done=document.querySelector('#done')

const tasks=document.querySelectorAll('.task')

let dragElement=null

tasks.forEach(task=>{
    task.addEventListener("drag",(e)=>{
      //  console.log("dragging",e);
        dragElement=task;})
})


function addDragEventonColumn(column){
column.addEventListener('dragenter',(e)=>{e.preventDefault();column.classList.add("hover-over")})  

column.addEventListener('dragleave',(e)=>{e.preventDefault();column.classList.remove('hover-over')})

column.addEventListener('dragover',(e)=>{e.preventDefault();

})
column.addEventListener('drop',(e)=>{e.preventDefault();
console.log('Dropped',dragElement,column)

column.appendChild(dragElement)
column.classList.remove('hover-over')})
}

addDragEventonColumn(todo)
addDragEventonColumn(progress)
addDragEventonColumn(done)

const modalbg = document.querySelector('.modal .bg')
const toggleModalBtn = document.querySelector('#toggle-modal')
const modal = document.querySelector('.modal')
const addTaskButton = document.querySelector('#add-new-task')


toggleModalBtn.addEventListener("click", () => {
  modal.classList.toggle("active")
})

modalbg.addEventListener("click", () => {
 modal.classList.remove("active")})