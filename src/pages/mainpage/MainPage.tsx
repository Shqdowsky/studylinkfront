import React from 'react';
import "./MainPage.css"
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="wrapper">
        <header>
            <div className="header__content">
                <h1 className="title">Study Link</h1>
                <Link to="/works" className="app-button">Запустити додаток</Link>
            </div>
        </header>
        <div className="main-body">
            <div className="container">
                <div className="main-body__content main-body-content">
                    <div className="main-body-content__text">
                        <h3>Ласкаво просимо до StudyLink</h3>
                        <p>StudyLink — це платформа, де студенти/учні можуть завантажувати та ділитися своїми навчальними матеріалами.
 Всі студенти можуть завантажити матеріали для підтримки свого навчального процесу.</p>
                        <div className="main-body-content__link main-body-content-link">
                            <Link to="/works" className="main-body-content-link__text">Розпочати</Link>
                            <img src="images/svg/arrow-right.svg"/>
                        </div>
                    </div>
                    <div className="main-body-image">
                        <img src="images/main-body-image.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MainPage;