import React from "react";
const styles = {
    primary: "w-full py-2.5 bg-black text-white rounded-full",
    naked: "w-3/6 py-2.5 mt-2",
    simple: "font-bold py-6 text-lg",
};
export default function Button({classname, style, onClick, type, ...props}) {
    return (
        <button className={`${styles[style]}`} onClick={onClick} type={type} {...props}/>
    );
}