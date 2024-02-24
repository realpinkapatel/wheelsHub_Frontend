import React from "react";

const CustomSpan=(props)=>{

    return(
            <span
            className={props.className}
            style={props.style}
            >{props.children}</span> 
    )
}

export default CustomSpan;