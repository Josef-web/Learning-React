import React, { useState } from 'react';

function toDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){

        if(index > 0)
        {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){

        if(index < tasks.length - 1)
        {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1 className="to-do-heading">To-Do-List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}/>
                <button
                    className="add-btn to-do-list-items"
                    onClick={addTask}>
                    Add Task
                </button>
            </div>
            <div>
                <h2>{tasks.length} Tasks Here</h2>
            </div>
            <ol>
                {tasks.map((task, index) =>

                    <li key={index}>
                <span className="text">{task}</span>
                        <button className="move-btn to-do-list-items"
                                onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button className="move-btn to-do-list-items"
                                onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                        <button className="delete-btn to-do-list-items"
                                onClick={() => deleteTask(index)}>
                            🗑️
                        </button>
                    </li>)}
            </ol>

        </div>);
}

export default toDoList;