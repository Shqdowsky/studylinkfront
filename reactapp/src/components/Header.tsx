import React,{useState} from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import MySearch from './UI/MySearch';

interface HeaderProps{
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Header:  React.FC<HeaderProps> = ({searchQuery, setSearchQuery}) => {
    const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate()
    const isWorksPath = path.includes('/works') || path.includes('/predmet') || path.includes('/recent-works');
    if(location.pathname == "/"){
        return null
    }
    return (
        <header className='works-header'>
            <div className='works-header__content'>
                <h1 onClick={() => navigate("/")} className='works-header__title'>Study Link</h1>
                <div className='works-header__body'>
                    {isWorksPath &&
                        <MySearch value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder='що шукаємо?'/>
                    }
                    <nav>
                        <Link to="/works">Роботи</Link>
                        <Link to="/recent-works">Нещодавні</Link>
                        <Link to="/create-work">Створити Роботу</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;