import React from "react";

const CustomButton = (props) => {
    return (
        <div>
            <button
                type={props.type}
                className={props.className}
                onClick={props.onClick}
                placeholder={props.placeholder}
            >{props.children}</button>
        </div>
    )
}

export default CustomButton;
