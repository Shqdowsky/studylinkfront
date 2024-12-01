import React from 'react';
import classes from './MySearch.module.css'

interface ISearch {
    value: any;
    placeholder: string;
    onChange?: (e: any) => void;
}

const MySearch = (props: ISearch) => {
    return (
        <input className={classes.mySearch} {...props} />
    );
};

export default MySearch;