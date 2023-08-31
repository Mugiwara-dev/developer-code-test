import React from "react";

const textAreaVarients = {
    medium: "w-full h-13 resize-none outline-0 ml-2",
    large: "w-full h-20 resize-none outline-0 ml-2"
}
const TextField = ({style, placeholder, name}) =>{
    const varient = textAreaVarients[style]
    return(
        <>
            <textarea className={varient} placeholder={placeholder} name={name}/>
        </>
    )
}
export default TextField;