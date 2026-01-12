let tasksData={

}

const todo=document.querySelector('#todo')
const progress=document.querySelector('#progress')
const done=document.querySelector('#done')

const tasks=document.querySelectorAll('.task')

let dragElement=null

function addTask(title,desc,column){
 const div=document.createElement('div')
  div.classList.add("task")
  div.setAttribute("draggable","true")

  div.innerHTML=
 ` <h2>${title}</h2>
  <p>${desc}</p>
  <button>Delete</button>
  `

 column.appendChild(div)
 div.addEventListener("drag",(e)=>{
  dragElement=div})

const deleteButton=div.querySelector("button")
deleteButton.addEventListener("click",()=>{
  div.remove()
updateTaskCount()
})

  return div;

  
}

function updateTaskCount(){
    columns.forEach(col=>{
  const tasks=col.querySelectorAll(".task")
  const count=col.querySelector(".right")

tasksData[col.id]=Array.from(tasks).map(t=>{
  return {
    title:t.querySelector("h2").innerText,
    desc:t.querySelector("p").innerText
  }
})
console.log(tasksData)
localStorage.setItem("tasks",JSON.stringify(tasksData))

 count.innerText=tasks.length;
})

}

if(localStorage.getItem('tasks')){
  const data=JSON.parse(localStorage.getItem("tasks"))
console.log(data)
  for (const col in data){
   // console.log(col,data[col])
   const column=document.querySelector(`#${col}`)
   data[col].forEach(task=>{
  //    const taskTitle=document.querySelector("#task-title-input").value
  // const taskDescription=document.querySelector("#task-desc-input").value

//      const div=document.createElement('div')
//   div.classList.add("task")
//   div.setAttribute("draggable","true")

//   div.innerHTML=
//  ` <h2>${task.title}</h2>
//   <p>${task.desc}</p>
//   <button>Delete</button>
//   `

//  column.appendChild(div)
//  div.addEventListener("drag",(e)=>{
//   dragElement=div})

addTask(task.title,task.desc,column)
  
   })
    const tasks=column.querySelectorAll(".task")
  const count=column.querySelector(".right")

 count.innerText=tasks.length;

  }
}

tasks.forEach(task=>{
    task.addEventListener("drag",(e)=>{
      //  console.log("dragging",e);
        dragElement=task;})
})

const columns=[todo,progress,done]

function addDragEventonColumn(column){
column.addEventListener('dragenter',(e)=>{e.preventDefault();column.classList.add("hover-over")})  

column.addEventListener('dragleave',(e)=>{e.preventDefault();column.classList.remove('hover-over')})

column.addEventListener('dragover',(e)=>{e.preventDefault();

})
column.addEventListener('drop',(e)=>{
  e.preventDefault();

//console.log('Dropped',dragElement,column)

column.appendChild(dragElement)
column.classList.remove('hover-over')

columns.forEach(col=>{
  const tasks=col.querySelectorAll(".task")
  const count=col.querySelector(".right")

 count.innerText=tasks.length;
})
//     columns.forEach(col=>{
//   const tasks=col.querySelectorAll(".task")
//   const count=col.querySelector(".right")

// tasksData[col.id]=Array.from(tasks).map(t=>{
//   return {
//     title:t.querySelector("h2").innerText,
//     desc:t.querySelector("p").innerText
//   }
// })
// console.log(tasksData)
// localStorage.setItem("tasks",JSON.stringify(tasksData))

//  count.innerText=tasks.length;
// })
updateTaskCount()
})
}

addDragEventonColumn(todo)
addDragEventonColumn(progress)
addDragEventonColumn(done)

//kal k liye
const modalbg = document.querySelector('.modal .bg')
const toggleModalBtn = document.querySelector('#toggle-modal')
const modal = document.querySelector('.modal')
const addTaskButton = document.querySelector('#add-new-task')


toggleModalBtn.addEventListener("click", () => {
  modal.classList.toggle("active")
})

modalbg.addEventListener("click", () => {
 modal.classList.remove("active")})


addTaskButton.addEventListener("click",()=>{
  const taskTitle=document.querySelector("#task-title-input").value
  const taskDescription=document.querySelector("#task-desc-input").value

//   const div=document.createElement('div')
//   div.classList.add("task")
//   div.setAttribute("draggable","true")

//   div.innerHTML=
//  ` <h2>${taskTitle}</h2>
//   <p>${taskDescription}</p>
//   <button>Delete</button>
//   `

//   todo.appendChild(div)

//   div.addEventListener("drag",(e)=>{dragElement=div})

addTask(taskTitle,taskDescription,todo)
//   columns.forEach(col=>{
//   const tasks=col.querySelectorAll(".task")
//   const count=col.querySelector(".right")

// tasksData[col.id]=Array.from(tasks).map(t=>{
//   return {
//     title:t.querySelector("h2").innerText,
//     desc:t.querySelector("p").innerText
//   }
// })
// console.log(tasksData)
// localStorage.setItem("tasks",JSON.stringify(tasksData))

//  count.innerText=tasks.length;
// })
updateTaskCount()
  modal.classList.remove('active')

}) 
