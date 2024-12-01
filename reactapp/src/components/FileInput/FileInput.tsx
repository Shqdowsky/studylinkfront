import React, { useState } from "react";
import "./FileInput.css"; 
import { useFileContext } from "../../context/FileContext";

const FileInput: React.FC = () => {
    const [fileNames, setFileNames] = useState<string[]>([]);
    const {selectedFiles, setSelectedFiles} = useFileContext()

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if(files){
            setSelectedFiles(files);
        }
        if (files) {
            const names = Array.from(files).map(file => file.name);
            setFileNames(names);
        }
    };

    return (
        <div className="file-input-container">
            <input
                type="file"
                multiple
                className="file-input"
                name="userfile"
                onChange={handleFileChange}
            />
            <div className="file-names">
                {fileNames.length > 0 
                    ? (fileNames.map((name, index) => <p key={index}>{name}</p>)) 
                    : (<p>No files selected</p>)}
            </div>
        </div>
  );
};

export default FileInput;