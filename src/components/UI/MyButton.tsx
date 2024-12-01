import React, { FC } from 'react';
import classes from './MyButton.module.css'

interface IButton {
    onClick?: () => void;
    children: React.ReactNode;
}

const MyButton: FC<IButton> = ({ onClick, children }) => {
    return (
        <div onClick={onClick} className={classes.myButton}>
            {children}
        </div>
    );
};

export default MyButton;