import React from 'react';
import classes from './List.module.css'

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {
    return (
        <div className={classes.list}>
           {props.items.map(props.renderItem)}
        </div>
    );
};