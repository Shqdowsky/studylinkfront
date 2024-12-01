import React, { createContext, useContext } from "react";

interface FileContextType {
    selectedFiles: FileList | null; // Выбранные файлы в виде FileList
    setSelectedFiles: React.Dispatch<React.SetStateAction<FileList | null>>; // Функция для обновления состояния
}


export const FileContext = createContext<FileContextType | undefined>(undefined);

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return context;
};