import React from "react";

const CustomInput = (props) => {

    return (
        <>
            <input
                type={props.type}
                placeholder={props.placeholder}
                className={props.className}
                style={props.style}
                value={props.value}
                name={props.name}
                min={props.min}
                {...props}
                onChange={props.onChange ? props.onChange : null}
            /><br />
        </>
    )
}

export default CustomInput;