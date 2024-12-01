import React, {FC} from 'react';
import { IWork } from '../models/IWork';
import WorkItem from '../WorkItem/WorkItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './WorksList.css'
import { Navigate, useNavigate } from 'react-router-dom';

interface WorkListProps{
    sortedWorks: IWork[], 
}

const WorksList: FC<WorkListProps> = ({sortedWorks}) => {
    const router = useNavigate()
    sortedWorks.reverse()
    return (
        <div className='works-page-content__works'>
            <TransitionGroup>
                {sortedWorks && sortedWorks.map((work) => 
                    <CSSTransition
                        key={work._id}
                        timeout={300}
                        classNames="work"
                    > 
                        <WorkItem onClick={(work) => router(`/works/${work._id}`)} key={work._id} work={work}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default WorksList;