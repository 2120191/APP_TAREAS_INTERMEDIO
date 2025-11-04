const input=document.querySelector('input[type="text"]')
const userInput=document.querySelector('#inputUsuario')
const lista=document.querySelector("#lista")
let idCounter=0
const stats=document.querySelector("#stats")

userInput.addEventListener('submit',(event) =>{
    event.preventDefault()
    agregatarea()
})

let agregatarea=()=>{
    idCounter++
    let newValue=input.value
    if (newValue=="") {
        alert("Por favor ingrese una tarea")
        return  
    }
    lista.innerHTML+=`
    <div class="contenedor-tarea" id="${idCounter}">
            <label>
                <input type="checkbox">
                ${newValue}
            </label>
            <img src="./assets/basurero.webp" alt="eliminar" class="btnEliminar">
        </div>`

        input.value=""
        updateStats()
}

lista.addEventListener('click',(event)=>{
    if (event.srcElement.nodeName=="IMG") {
        deleteTask(event.srcElement.parentElement.id)
    }else if(event.srcElement.nodeName=="INPUT"){
        updateStats()
    }
})

let updateStats=()=>{
    let divs=lista.querySelectorAll(`div`)
    let checkboxes=lista.querySelectorAll(`input[type="checkbox"]:checked`)
    stats.innerHTML=`tareas pendientes: ${divs.length} completadas: ${checkboxes.length}`
}

let deleteTask=(id)=>{
    let taskDelete=document.getElementById(id)
    lista.removeChild(taskDelete)
    updateStats()
}