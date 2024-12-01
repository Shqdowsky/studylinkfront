import React from 'react';
import WorksList from '../components/WorksList/WorksList';
import { postApi } from '../service/PostService';
import { IWork } from '../components/models/IWork';
import { useFilterWorks } from '../hooks/useFilter';

interface WorksPageProps{
    searchQuery: string;
}

const RecentWorksPage: React.FC<WorksPageProps> = ({searchQuery}) => {
    const {data, error, isLoading} = postApi.useFetchAllWorksQuery(50);
    let idsArray: string[] = JSON.parse(localStorage.getItem('visitedIds') || '[]');
    const viewedWorks: IWork[] = data 
        ? idsArray.flatMap((id) => data.filter((item) => item._id === id))
        : [];
    let sortedWorks = viewedWorks.length > 0 ? viewedWorks.reverse() : [];
    sortedWorks = useFilterWorks(sortedWorks, searchQuery);
    return (
        <div className='works-page'>
            {isLoading && <h2  style={{textAlign: "center", fontSize: "1.2vw"}}>Loading...</h2>}
            {error && <h2 style={{textAlign: 'center', color: 'red', fontSize: "1.2vw"}}>Error</h2>}
            <h1 className='works-page__title'>Нещодавно Переглянуті Роботи</h1>
            {sortedWorks?.length == 0 && <div style={{textAlign: 'center'}}>Поки нема переглянутих робіт :/</div>}
            <div className='works-page__body'>
                <div className='container'>
                    {isLoading && <h2>Loading...</h2>}
                    {error && <h2 style={{textAlign: 'center', color: 'red'}}>Error</h2>}
                    <div className='works-page__content works-page-content'>
                        <div className='works-page-content__works-scroll'>
                            <WorksList sortedWorks={sortedWorks}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentWorksPage;