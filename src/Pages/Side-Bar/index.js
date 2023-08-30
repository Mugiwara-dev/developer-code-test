import React, { useState } from "react";
import { Link } from "react-router-dom";
import SVG from "../../Components/SVGs/svg";


const Sidebar = () => {
    const [activeButton, setActiveButton] = useState(null);

    return (
        <>
            <div>
                <div className="flex flex-col">
                    <ul className="w-80 h-screen">
                        <li>
                            <Link to="/task" className={`${activeButton === "Task" ? "bg-black text-white" : "text-black"} font-bold text-2xl w-4/5 py-3.5 rounded-r-full flex pl-10 mt-5 items-center`} onClick={() => setActiveButton("Task")}>
                                <div className="mr-4">
                                    <SVG height={"24"} width={"18"} pathName="Clipboard" fill={activeButton === "Task" ? "white" : "black"}/>
                                </div>
                                Task
                            </Link>
                        </li>

                        <li>
                            <Link to="/location" className={`${activeButton === "Location" ? "bg-black text-white" : "text-black"} font-bold text-2xl w-4/5 py-3.5 rounded-r-full flex pl-10 mt-5 items-center`} onClick={() => setActiveButton("Location")}>
                                <div className="mr-4">
                                    <SVG height={"24"} width={"18"} pathName="Location" fill={activeButton === "Location" ? "white" : "black"} />
                                </div>
                                Location
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
