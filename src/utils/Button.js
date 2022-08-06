import React from "react";
import { Button } from "@mui/material";


const ButtonComponent = ({children, ...props}) => {
    console.log(children, props);
    return (
        <Button
            {...props}
        >
            {children}
        </Button>
    );
}

export default ButtonComponent;