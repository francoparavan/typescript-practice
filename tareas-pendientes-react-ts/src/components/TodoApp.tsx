import { useState } from 'react'
import { ListaTareas } from './ListaTareas'

export const TodoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState<string>("")
    const [listaTareas, setlistaTareas] = useState<string[]>([])


    const handleAddTask = () => {
        if (nuevaTarea.trim() === "") return //si la nueva tarea es vacia corta y sale
        setlistaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
        setNuevaTarea('') //borra lo que habia en el input
    }

    const handleBorrarTarea = (index: number) => {
        setlistaTareas(tareas => tareas.filter((_, i) => i !== index))
    }


    return (
        <div>
            <h1>Lista de tareas</h1>
            <div className="task-form">
                <input type="text"
                    value={nuevaTarea} //Setea el valor inicial del input en nuevaTarea
                    onChange={(e) => setNuevaTarea(e.target.value)}  //Setea lo q vayas escribiendo en nuevaTarea
                    placeholder="Nueva tarea"
                />
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
    )
}
