import React from "react";

export const Button = ({textDisplay, ...props}) => {
    return (
        <button {...props} >{textDisplay}</button>
    );
};
