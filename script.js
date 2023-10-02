// obtenemos la fecha
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const año = document.getElementById('año');
const diaSemana = document.getElementById('diaSemana');

// cotenedor de los elementos
const taskContainer = document.getElementById('taskContainer');

// añadimos a cada const su respectivo valor
const setDate = () => {
    const date = new Date();
    // primero se debe indicar el idioma, y como un objeto de acceden a sus valores por separado
    // se especifica los valores como short, numeric para obtener el formato deseado
    dia.textContent = date.toLocaleString('es', { day: 'numeric'});
    mes.textContent = date.toLocaleString('es', { month: 'short'});
    año.textContent = date.toLocaleString('es', { year: 'numeric'});
    diaSemana.textContent = date.toLocaleString('es', { weekday: 'long'});
}

// llamamos la función para que ejecute de manera correcta lo que buscamos
setDate();

// creamos la función principal de la pagina
const addNewTask = event => {
    // al momento de dar submit la pagina se recarga, preventDefaul evita que esto ocurra
    event.preventDefault();
    // con target accedemos a la propiedades del evento y tomamos de referencia el taskText
    // con {value} creamos una variable para almacenar el valor que obtuvimos de taskText
    const { value } = event.target.taskText;
    
    // si no hay nada en el input no se ejecutará nada
    if (!value) return;

    const task = document.createElement('div');
    task.classList.add('task', 'Rborder');
    task.addEventListener('click', newStateTask);
    task.textContent = value;

    // agregamos el nuevo elemento en la lista de tareas
    taskContainer.prepend(task);

    // reseteamos el input
    event.target.reset();
};

const newStateTask = event => {
    event.target.classList.toggle('done');
}

const order = () => {
    const done = [];
    const toDo = [];

    taskContainer.childNodes.forEach(listas => {
        listas.classList.contains('done') ? done.push(listas) : toDo.push(listas);
    });

    return [...toDo, ...done]
}

const orderedTask = () => {
    order().forEach(el => taskContainer.appendChild(el));
}