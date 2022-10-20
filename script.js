const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonEnter = document.querySelector("#enter");
const check = "fa-check-circle";
const uncheck = "fa-circle";
const lineThrough = "dashed"
var id = 0;

//agrgar tarea

function agregar (tarea, id, realizado, eliminado){ 

    if(eliminado){
        return
    }
    
    const hecho = realizado ? check :uncheck;
    const line = realizado ? lineThrough :"";

    const element = ` <li id = "elemento" > <i class="fas ${hecho}" data="realizado" id="${id}"></i>
    <p class="text ${line}">${tarea}</p>
    <i class="fas fa-trash de" data="eliminado" id="${id}"></i> </li>` 

    lista.insertAdjacentHTML("beforeend", element)
}

//click en agregar//
botonEnter.addEventListener(`click`, ()=>{
    const tarea = input.value;
    if(tarea){
        agregar(tarea, id, false, false);
    }
    input.value = ``
    id++;
})

 //enter
document.addEventListener(`keyup`, function (event){
    if(event.key === "Enter"){
        const tarea = input.value;
    if(tarea){
        agregar(tarea, id, false, false);
    }
    input.value = ``
    }
})

function tareaRealizada(element){
    element.classList.toggle(check);
    element.classList.toggle(uncheck)
    element.parentNode.querySelector(".text").classList.toggle(lineThrough);
}

function tareaEliminada(element){
element.parentNode.parentNode.removeChild(element.parentNode)
}


lista.addEventListener("click", function (event){
    const element = event.target;
    const elementData = element.attributes.data.value;
    
    
    if(elementData === "realizado"){
        tareaRealizada(element)
    }else if(elementData === "eliminado"){
        tareaEliminada(element);
    }
})

