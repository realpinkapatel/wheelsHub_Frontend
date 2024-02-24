import React from "react";

const CustomLoadBtn = (props) => {
    const { onClick, isLoading, children } = props // destructuring
    // console.log("props ==== >", { onClick, isLoading, children },)
    return (
        <button
            className={props.className ? props.className : "lg-btn-container"}
            onClick={onClick}>
            {isLoading ?
                <i className="fa fa-spinner fa-spin"></i> : children}
        </button>
    )
}

export default CustomLoadBtn;