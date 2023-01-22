import { InputStyle } from "./style";

export const Input = (props) => {

    return(
        <InputStyle type={props.type} {...props}/>
    );
}

