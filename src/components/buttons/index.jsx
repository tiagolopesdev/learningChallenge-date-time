import React from "react";
import { ButtonStyle } from "./style";

export const Button = ({textDisplay, ...props}) => {
    return (
        <ButtonStyle {...props} >{textDisplay}</ButtonStyle>
    );
};
