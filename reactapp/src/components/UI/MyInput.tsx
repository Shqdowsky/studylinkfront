import React from 'react';
import classes from './MyInput.module.css'

interface IInput {
    value: any;
    placeholder: string;
    onChange?: (e: any) => void;
}

const MyInput = (props: IInput) => {
    return (
        <input className={classes.myInput} {...props} />
    );
};

export default MyInput;