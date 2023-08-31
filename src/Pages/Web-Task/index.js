import React, {useState} from "react";
import SideBar from "../Side-Bar";
import WebNewTask from "../Web-New Task";
import SVG from "../../Components/SVGs/svg";
import Button from "../../Components/Buttons/button";
import InputField from "../../Components/Inputs/input";

const WebTask = () => {

    const initialIncompleteTask = [
        {
            id: 1,
            summary: "Submit my resume",
            date: "⏰ 2023-08-28T17:00",
            complete: false
        },
        {
            id: 2,
            summary: "Complete the test",
            date: "⏰ 2023-08-29T10:00",
            complete: false
        },
        {
            id: 3,
            summary: "Meeting with Jack",
            date: "⏰ 2023-02-24T15:00",
            complete: false
        },
        {
            id: 4,
            summary: "Buy a biscuit for me",
            date: "⏰ 2023-02-24T17:00",
            complete: false
        },
        {
            id: 5,
            summary: "Respond to Jane email",
            date: "⏰ Today, 17.00",
            complete: true
        },
        {
            id: 6,
            summary: "Rechedule weekly meeting",
            date: "⏰ 2023-02-24T15:00",
            complete: true
        },
        {
            id: 7,
            summary: "Service my bike",
            date: "⏰ Today, 17.00",
            complete: true
        },
        {
            id: 8,
            summary: "Recheck the agreement document",
            date: "⏰ Today, 17.00",
            complete: true
        }
    ]
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTask] = useState(initialIncompleteTask);
    let handleClick = (e) => {
        e.preventDefault()
        let newTask = {

            id: tasks.length + 1,
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
                const updatedTask = {...task}; // Create a shallow copy of the task
                updatedTask.complete = !updatedTask.complete; // Toggle the complete property
                return updatedTask;
            } else {
                return task; // Keep the task as is
            }
        });
        setTask(updatedTasks);
    };


    const incompleteTasks = tasks.filter((task) => !task.complete)
    const completeTasks = tasks.filter((task) => task.complete)
    return (
        <>

            <div className="flex">
                <SideBar/>
                <div className="pl-8">
                    <Button onClick={() => setShowModal(true)} style="simple">+ Add new task</Button>
                    <div>
                        <h1 className="font-bold text-lg">Incomplete</h1>
                        {incompleteTasks.map((task) => (
                            <ul>
                                <li key={task.id}>
                                    <label className="flex items-center text-lg py-1.5">
                                                <span
                                                    className="relative w-6 h-6 rounded-md border border-zinc-300 bg-gradient-to-b from-neutral-50 to-stone-50 flex items-center justify-center">
                                                    <InputField type="checkbox" style="Checkbox" checked={task.complete} onChange={() => handleTaskCompleteChange(task.id)}/>
                                                </span>
                                        <span className="pl-2">{task.summary}</span>
                                    </label>
                                </li>
                                <p className="text-sm text-gray-400 pl-9 pb-3">{task.date}</p>
                            </ul>
                        ))}
                    </div>
                    <div>
                        <h1 className="font-bold text-lg py-3">Complete</h1>
                        {completeTasks.map((task, index) => (
                            <ul>
                                <li key={task.id}>
                                    <label className="flex items-center py-1.5 text-lg">
                                        <span className="relative w-6 h-6 rounded-md border border-zinc-300 bg-gradient-to-b from-neutral-50 to-stone-50 flex items-center justify-center">
                                            <InputField type="checkbox" style="Checkbox" checked={task.complete} onChange={()=>handleTaskCompleteChange(task.id)}/>
                                            <SVG width={24} height={24}  pathName="Tick" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="currentColor"/>
                                        </span>
                                        <span className="pl-5 text-gray-400">{task.summary}</span>
                                    </label>
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



