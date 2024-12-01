import React, { useState, ChangeEvent, useContext } from "react";
import  "./SelectItem.css";
import { SelectContext, useSubject } from "../../context/SubjectContext";


interface Subject {
    label: string;
    value: string;
}

const subjects: Subject[] = [
    { label: "Хімія", value: "himiya" },
    { label: "Математика", value: "matematika" },
    { label: "Історія", value: "istoriya" },
];

const SelectItem: React.FC = () => {
    const {selectedSubject, setSelectedSubject} = useSubject()


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedSubject(e.target.value);
    };

    return (
    <div className="styled-select-container">
        <label htmlFor="subject-select" className="select-label">
            Виберіть файл:
        </label>
        <select id="subject-select" value={selectedSubject} onChange={handleChange} className="styled-select">
            <option value="" disabled>
                -- Обрати --
            </option>
            {subjects.map((subject) => (
                <option key={subject.value} value={subject.value}>
                    {subject.label}
                </option>
            ))}
        </select>
    </div>
  );
};

export default SelectItem;
