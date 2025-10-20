const input = document.querySelector(".tarea");
const btn = document.querySelector(".btnAgregarTarea");
const lista = document.querySelector(".listaTareas");

// Mostrar tareas guardadas
if (localStorage.tareas) {
    localStorage.tareas.split(",").forEach(t => {
        if (t) lista.innerHTML += `<li onclick="this.classList.toggle('completada')">${t}</li>`;
    });
}

// Agregar tarea nueva
btn.onclick = () => {
    const texto = input.value.trim();
    if (!texto) return alert("Escribe una tarea");

    lista.innerHTML += `<li onclick="this.classList.toggle('completada')">${texto}</li>`;

    localStorage.tareas = localStorage.tareas ? localStorage.tareas + "," + texto : texto;
    input.value = "";
};
