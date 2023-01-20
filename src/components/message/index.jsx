import React from "react";


export const Message = ({ dateFind }) => {
    return (
        <p>
            {dateFind === undefined ?
                'Value founded: não encontrado' :
                `Value founded: ${dateFind}`
            }
        </p>
    );
};
