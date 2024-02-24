import React from "react";

const CustomImg=(props)=>{
    // console.log("image properties ===== >",props)

    return(
    <div>
        <img 
        src={props.src}
        alt={props.alt}
        className={props.className}
        />
    </div>
)}

export default CustomImg;