import React, {useState} from "react";
import SideBar from "../Side-Bar";
import WebNewTask from "../Web-New Task";
const WebTask = () =>{

    const arrayObject = [
        {
            summary: "Submit my resume",
            date: "⏰ Today, 17.00"
        },
        {
            summary: "Complete the test",
            date: "⏰ Tomorrow, 10.00"
        },
        {
            summary: "Meeting with Jack",
            date: "⏰ 24 Feb, 15.00"
        },
        {
            summary: "Buy a biscuit for me",
            date: "⏰ 24 Feb, 17.00"
        }
    ]
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState(arrayObject);
    let handleClick = (e)=>{
        e.preventDefault()
        let object = {
            summary: e.target.summary.value,
            date: `⏰ ${e.target.date.value}`
        }
        const updatedItems = [...items]
        updatedItems.push(object)
        setItems(updatedItems)
        setShowModal(false)
    }
    return(
        <>

                <div className="flex">
                    <SideBar/>
                    <div>
                        <button onClick={()=>setShowModal(true)}>+ Add new task</button>
                        <div>
                            <h1>Incomplete</h1>
                            {items.map((items, index)=>(
                                <ul>
                                    <li key={index}>
                                        <label>
                                            <input type="checkbox"/>
                                            {items.summary}
                                        </label>
                                        <p>{items.date}</p>
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



