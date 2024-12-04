import React, { createContext, useContext } from "react";

interface FileContextType {
    selectedFiles: FileList | null; 
    setSelectedFiles: React.Dispatch<React.SetStateAction<FileList | null>>; 
}


export const FileContext = createContext<FileContextType | undefined>(undefined);

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return context;
};