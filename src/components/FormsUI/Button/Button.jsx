import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { lightBlue } from '@mui/material/colors';
import React from 'react';


const ButtonWrapper = ({ children }) => { 
    const configButton = {
        fullWidth: true,
        type: "submit",
        variant: "contained",
        sx: {
            background: lightBlue[800], 
            m: 2, 
            p: 1 
        }
    }
    return (
        <Button {...configButton}>{children}</Button>
    )
}

export default ButtonWrapper; 
