import { TextField } from '@mui/material';
import { useField } from 'formik';
import React from 'react';


const TextfieldWrapper = ({ name, ...otherProps }) => { 

    const [field, meta] = useField(name);
    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth: true,
        sx: {
            m:2,
        }
    }
    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }
    return (
        <TextField {...configTextField}/>
    )
}

export default TextfieldWrapper; 