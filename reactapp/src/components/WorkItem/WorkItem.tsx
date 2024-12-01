import React, {FC} from 'react';
import { IWork } from '../models/IWork';
import './WorkItem.css'
import { useNavigate } from 'react-router-dom';
import { SaveIdstoLS } from '../../service/SaveIdsToLS';

interface WorkItemProps{
    work: IWork, 
    onClick: (work: IWork) => void
}

const WorkItem: FC<WorkItemProps> = ({work, onClick}) => {
    const handleClick = () => {
        onClick(work);
        if(work._id){
            SaveIdstoLS(work._id);
        }
    };

    return (
        <div className='work-Item' onClick={handleClick}>
            <div className='work-Item__body work-Item-body'>
                <h2 className='workItem__title'>{work.title}</h2>
                <div className='workItem__text'>{work.body}</div>
            </div>
        </div>
    );
};

export default WorkItem;