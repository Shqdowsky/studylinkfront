import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postApi } from '../service/PostService';
import WorksList from '../components/WorksList/WorksList';
import { categories } from '../data/predmeti';
import FilterItem from '../components/FilterItem/FilterItem';
import { useFilterWorks } from '../hooks/useFilter';

type CategoryWorksParams = {
    predmet: string;
 }

interface WorksPageProps{
    searchQuery: string;
}

const CategoryWorksPage: React.FC<WorksPageProps> = ({searchQuery}) => {
    const params = useParams<CategoryWorksParams>()
    const router = useNavigate()
    const {data: works, error, isLoading} = postApi.useFetchAllWorksQuery(50);
    const categoryWorks = params.predmet == "all" ? works : works?.filter(item => item.predmet && item.predmet.includes(String(params.predmet)));
    let sortedWorks = categoryWorks ? categoryWorks : []
    sortedWorks = useFilterWorks(sortedWorks, searchQuery);
    const predmet = categories.find(predmet => predmet.lesson == params.predmet);

    return (
        <div className='works-page'>
            <h1 className='works-page__title'>{predmet?.text}</h1>
            <div className='works-page__body'>
                <div className='container'>
                    {isLoading && <h2  style={{textAlign: "center", fontSize: "1.2vw"}}>Loading...</h2>}
                    {error && <h2 style={{textAlign: 'center', color: 'red', fontSize: "1.2vw"}}>Error</h2>}
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
                        {categoryWorks && categoryWorks?.length > 0 &&
                            <div className='works-page-content__works-scroll'>
                                <WorksList sortedWorks={sortedWorks} />
                            </div>
                        }
                        {categoryWorks?.length == 0 && <div className='emptyposts'>Поки нема робіт по цьому предмету :/</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryWorksPage;