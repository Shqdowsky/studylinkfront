import React, { useEffect, useState } from 'react';
import { postApi } from '../service/PostService';
import FilterItem from '../components/FilterItem/FilterItem';
import { useFilterWorks } from '../hooks/useFilter';
import WorksList from '../components/WorksList/WorksList';
import { IPredmet } from '../components/models/IPredmet';
import { Navigate, useNavigate } from 'react-router-dom';
import { categories } from '../data/predmeti';

interface WorksPageProps{
    searchQuery: string;
}

const WorksPage: React.FC<WorksPageProps> = ({searchQuery}) => {
    
    const {data: works, error, isLoading} = postApi.useFetchAllWorksQuery(10);
    let sortedWorks = works ? works : []
    const router = useNavigate()
    sortedWorks = useFilterWorks(sortedWorks, searchQuery);
    
    return (
        <div className='works-page'>
            <h1 className='works-page__title'>Всі предмети</h1>
            <div className='works-page__body'>
                <div className='container'>
                    {isLoading && <h2  style={{textAlign: "center", fontSize: "1.2vw"}}>Loading...</h2>}
                    {error && <h2 style={{textAlign: 'center', color: 'red', fontSize: "1.2vw"}}>error</h2>}
                    <div className='works-page__content works-page-content'>
                        <div className='works-page-content__filter works-page-content-filter'>
                            <h2 className='works-page-content-filter__title'>Предмети</h2>
                            <hr style={{marginBottom: '1.6vw'}}></hr>
                            <div className='works-page-content-filter__items'>
                            {categories && categories.map((category) => 
                                category.lesson != "all" 
                                ? <FilterItem onClick={(category) => router(`/predmet/${category.lesson}`)} filter={category}/> 
                                : <FilterItem onClick={(category) => router(`/works`)} filter={category}/>)}
                            </div>
                        </div>
                        {sortedWorks && sortedWorks?.length > 0 &&
                            <div className='works-page-content__works-scroll'>
                                <WorksList sortedWorks={sortedWorks} />
                            </div>
                        }
                        {sortedWorks?.length == 0 && <div className='emptyposts'>Поки нема робіт :/</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksPage;