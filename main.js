//**Definir constantes */


const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonAgregar = document.querySelector('#agregar-tarea');
const elemento = document.querySelector('#elemento');
const check = 'bi-record-circle';
const uncheck = 'bi-circle';
const tachado = 'tachado';
let LIST, id;

//Para mostrar la fecha actual es
const FECHA = new Date ()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{
    weekday:'long',
    month: 'short',
    day: 'numeric'
});

//Función agregar tarea
function agregarTarea(tarea,id,hecho,eliminar) {
    if (eliminar) { return }

    const realizado = hecho ? check : uncheck;
    const LINE = hecho ? tachado : '' ;
    const elemento = 
                `<li id="elemento">
                    <i id="${id} " data="hecho" class="bi ${realizado} "></i>
                    <p class="tarea-lista ${LINE} ">${tarea} </p>
                    <i id="${id} " data="eliminar" class="bi bi-x"></i>
                </li> `
                lista.insertAdjacentHTML("beforeend", elemento);
            
}

//Funcion para marcar tarea como realizada
function tareaRealizada(element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector('.tarea-lista').classList.toggle(tachado);
    LIST[element.id].realizado = !LIST[element.id].realizado ?false :true;
}

//Funcion para eliminar tarea
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].eliminar = true;
    
};

//Evento de clic para agregar tarea
botonAgregar.addEventListener("click", () => {
    const tarea = input.value;
    if (tarea) {
        agregarTarea(tarea, id, false, false)
        LIST.push({
            nombre: tarea,
            id: id,
            hecho: false,
            eliminar: false,
        });
        localStorage.setItem("TODO", JSON.stringify(LIST));
        id++;
        input.value = "";

    }
});

//Para marcar o eliminar tarea
lista.addEventListener("click", function (event){
    const element = event.target;
    const elementData = element.attributes.data.value;
    if (elementData == "hecho") {
        tareaRealizada(element);
    } else if (elementData == "eliminar") { 
        tareaEliminada(element);
    };
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

//Cargar tareas desde local Storage
let data = localStorage.getItem ("TODO");
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    cargarLista(LIST);
} else {
    LIST = [];
    id = 0; 
}
function cargarLista(array) {
    array.forEach(
        function (item){
            agregarTarea(item.nombre, item.id, item.hecho, item.eliminar);
        }
    )
};