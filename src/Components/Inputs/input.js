import React from "react";

const inputVariants = {
    Simple: "border w-full px-3 py-2.5 rounded-md bg-gray-100",
    Checkbox: "opacity-0 w-6 h-6 absolute cursor-pointer",
    naked: "w-full outline-0 ml-2"
};

const InputField = ({ style, id, placeholder, type, name , checked, onChange, value}) => {
    const inputStyle = inputVariants[style];
    return (
        <input className={inputStyle} id={id} name={name} type={type} placeholder={placeholder} checked={checked} onChange={onChange} value={value} required />
    );
};

export default InputField;
