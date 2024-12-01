import React from 'react';
import "./MainPage.css"

function MainPage() {
  return (
    <div className="wrapper">
        <header>
            <div className="header__content">
                <h1 className="title">Study Link</h1>
                <a href="http://localhost:3000/works" className="app-button">Запустити додаток</a>
            </div>
        </header>
        <div className="main-body">
            <div className="container">
                <div className="main-body__content main-body-content">
                    <div className="main-body-content__text">
                        <h3>Ласкаво просимо до StudyLink</h3>
                        <p>StudyLink — це платформа, де студенти/учні можуть завантажувати та ділитися своїми навчальними матеріалами.
 Зареєстровані студенти можуть завантажити матеріали для підтримки свого навчального процесу.</p>
                        <div className="main-body-content__link main-body-content-link">
                            <a href="http://localhost:3000/works" className="main-body-content-link__text">Розпочати</a>
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