import React from "react";

const CustomParagraph = (prop) => {


    return (
        <div>
            <p
                className={prop.className}
                style={prop.style}
            >{prop.children}</p>
        </div>
    )
}
export default CustomParagraph;