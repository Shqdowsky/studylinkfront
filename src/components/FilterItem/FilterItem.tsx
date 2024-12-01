import React, {FC} from 'react';
import { IWork } from '../models/IWork';
import './FilterItem.css'
import { IPredmet } from '../models/IPredmet';

interface FilterItemProps{
    filter: IPredmet, 
    onClick: (category: IPredmet) => void
}

const FilterItem: FC<FilterItemProps> = ({filter, onClick}) => {
    return (
        <div className='filter-Item'>
            <div className='filter-Item__body filter-Item-body' onClick={() => onClick(filter)}>
                <div className='filter-Item__title'>{filter.text}</div>
                <div className='filter-Item__hover'></div>
            </div>
        </div>
    );
};

export default FilterItem;