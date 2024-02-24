import React from "react";

const CustomHeading=(props)=>{


    return(
        <div>
            <h1
            className={props.className}
            >{props.children}
            </h1>
        </div>
    )}

 export default CustomHeading;