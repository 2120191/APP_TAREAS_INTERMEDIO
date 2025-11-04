const input=document.querySelector('input[type="text"]')

const userInput=document.querySelector('#inputUsuario')

const lista=document.querySelector('#lista')
let idCounter=0
const stacts=document.querySelector("#stacts")

userInput.addEventListener('submit',(event)=>{event.preventDefault() 
    agregaTarea()})


let agregaTarea=()=>{
    idCounter++
    let newValue=input.value 
    if (newValue == ""){
        alert("np puede teneer tarea vacia")
        retur
    }
    lista.innerHTML+=`
     <div class="contenedor-tarea" id="${idCounter}">
     <label>
      <input type="checkbox">
      ${newValue}
     </label>
     <img src="./assets/basurero.webp" alt="eliminar" class="btnEliminar">
     </div> 
    `
     input.value
}

lista,addEventListener(`click`,(event)=>{
    if(event.srcElement.nodeName=="IMG"){
        console.log(event.srcElement.parentNode.id)
        }else if(event.srcElement.nodeName=="input"){
            updateStats()
        }
})

let updateStats=()=>{
    let divs=lista.querySelectorAll(`div`)
    let check=lista.querySelectorAll(' input[type"]:checket')
    stats.innerHTML=' tareas: ${divs.length} completadas: ${check.length}' 
}

let deleteTask=(id)=>{
    let taskDelete=document.getElementById(id)
    lista.removeChild(taskDelete)
    updateStats()
}






