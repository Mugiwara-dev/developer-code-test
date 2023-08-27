import React, {useState} from "react";
import SideBar from "../Side-Bar";
import WebNewTask from "../Web-New Task";
const WebTask = () =>{

    const initialIncompleteTask = [
        {
            id: 1,
            summary: "Submit my resume",
            date: "⏰ Today, 17.00",
            complete: false
        },
        {   id: 2,
            summary: "Complete the test",
            date: "⏰ Tomorrow, 10.00",
            complete: false
        },
        {
            id: 3,
            summary: "Meeting with Jack",
            date: "⏰ 24 Feb, 15.00",
            complete: false
        },
        {
            id: 4,
            summary: "Buy a biscuit for me",
            date: "⏰ 24 Feb, 17.00",
            complete: false
        }
    ]
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTask] = useState(initialIncompleteTask);
    let handleClick = (e)=>{
        e.preventDefault()
        let newTask = {
            summary: e.target.summary.value,
            date: `⏰ ${e.target.date.value}`,
            complete: false
        }
        const updatedTask = [...tasks]
        updatedTask.push(newTask)
        setTask(updatedTask)
        setShowModal(false)
    }


    const handleTaskCompleteChange = (id) => {
        // Create a copy of the tasks array to modify
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                // If the task has the same ID as the clicked task
                const updatedTask = { ...task }; // Create a shallow copy of the task
                updatedTask.complete = !updatedTask.complete; // Toggle the complete property
                return updatedTask;
            } else {
                return task; // Keep the task as is
            }
        });
        setTask(updatedTasks);
    };


    const incompleteTasks = tasks.filter((task) => !task.complete)
    const completeTasks = tasks.filter((task)=> task.complete)
    return(
        <>

                <div className="flex">
                    <SideBar/>
                    <div className="pl-8">
                        <button onClick={()=>setShowModal(true)} className="font-bold py-6 text-lg" >+ Add new task</button>
                        <div>
                            <h1 className="font-bold text-lg">Incomplete</h1>
                                {incompleteTasks.map((task)=>(
                                    <ul>
                                        <li key={task.id} className="py-2 text-lg flex items-center">
                                            <label className="flex items-center space-x-2">
                                                <span className="relative w-6 h-6 rounded-md border border-zinc-300 bg-gradient-to-b from-neutral-50 to-stone-50 flex items-center justify-center">
                                                    <input
                                                        type="checkbox"
                                                        className="opacity-0 w-6 h-6 absolute cursor-pointer"
                                                        checked={task.complete}
                                                        onChange={() => handleTaskCompleteChange(task.id)}
                                                    />
                                            </span>
                                                <span>{task.summary}</span>
                                            </label>

                                        </li>
                                        <p className="text-xs">{task.date}</p>
                                    </ul>


                                ))}
                        </div>
                        <div>
                            <h1>Complete</h1>
                            {completeTasks.map((task, index)=>(
                                <ul>
                                    <li key={task.id}>
                                        <label>
                                            <input type="checkbox" checked={task.complete} onChange={()=> handleTaskCompleteChange(task.id)}/>
                                            {task.summary}
                                        </label>
                                        <p>{task.date}</p>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            <WebNewTask showModal={showModal} setShowModal={setShowModal} handleClick={handleClick}/>
        </>
    )

};

export default WebTask;



