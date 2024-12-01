import React, { FC, PropsWithChildren } from 'react';
import "./Popup.css"

interface PopupProps {
    open: boolean;
    link: string;
    onClose: () => void;
}

const Popup: FC<PropsWithChildren<PopupProps>> = ({open, onClose, link}) => {
    return (
        <div onClick={onClose} className={`${open ? 'modal-active' : 'modal-hidden'}`}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Роботу успішно завантажено!</h2>
            <p className="modal-text">Тепер ваша робота доступна по цьому посиланню:</p>
            <a className="modal-link" href={link}>
                {link}
            </a>
            <button className="modal-close-btn" onClick={onClose}>
                Закрити
            </button>
        </div>
    </div>
    );
};

export default Popup;