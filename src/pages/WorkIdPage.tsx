import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postApi } from '../service/PostService';
import wordIcon from '../icons/word-icon.png';
import pdfIcon from '../icons/pdf-icon.png';
import pptxIcon from '../icons/powerpoint-icon.png';

type WorkIdPageParams = {
    id: string;
 }

 const WorkIdPage = () => {
    const params = useParams<WorkIdPageParams>();
    const navigate = useNavigate();
    const { data: work, error, isLoading } = postApi.useFetchWorkByIDQuery(String(params.id));
    const [popupImage, setPopupImage] = useState<string | null>(null);

    const getFileIcon = (filename: string) => {
        const extension = filename.split('.').pop()?.toLowerCase();
        switch (extension) {
            case 'doc':
            case 'docx':
                return wordIcon;
            case 'pdf':
                return pdfIcon;
            case 'ppt':
            case 'pptx':
                return pptxIcon;
            default:
                return `http://localhost:5000/${filename}`;
        }
    };

    const handleImageClick = (imageUrl: string) => {
        setPopupImage(imageUrl);
        document.body.style.overflow = 'hidden'; // Отключение прокрутки основной страницы
    };

    const closePopup = () => {
        setPopupImage(null);
        document.body.style.overflow = ''; // Включение прокрутки основной страницы
    };

    return (
        <div className="work-id-page-wrapper">
            <button className="button-behind" onClick={() => navigate(-1)}>
                Назад
            </button>
            <div className="work-id-page">
                <div className="work-id-page__body work-id-page-body">
                    <h2 className="work-id-page-body__title">{work?.title}</h2>
                    <div className="work-id-page-body__text">{work?.body}</div>
                    {work?.document && work.document.length > 0 && (
                        <div className="file-container">
                            {work.document.map((file, index) => {
                                const fileUrl = `http://localhost:5000/${file}`;
                                const fileExtension = file.toString().split('.').pop()?.toLowerCase();

                                return (
                                    <div key={index} className="file-item">
                                        <img
                                            src={getFileIcon(file.toString())}
                                            alt="file"
                                            className="file-icon"
                                            onClick={() => fileExtension === 'png' || fileExtension === 'jpg' ? handleImageClick(fileUrl) : null}
                                            style={{ cursor: fileExtension === 'png' || fileExtension === 'jpg' ? 'pointer' : 'default' }}
                                        />
                                        {fileExtension !== 'png' && fileExtension !== 'jpg' && (
                                            <a
                                                href={fileUrl}
                                                download
                                                className="download-button"
                                            >
                                                Завантажити
                                            </a>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content">
                        <img src={popupImage} alt="Popup" className="popup-image" />
                    </div>
                </div>
            )}
        </div>
    );
};


export default WorkIdPage;