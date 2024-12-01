import { createContext, useContext } from "react";

interface SubjectContextType {
    selectedSubject: string;
    setSelectedSubject: (value: string) => void;
}

export const SelectContext = createContext<SubjectContextType | undefined>(undefined);

export const useSubject = () => {
    const context = useContext(SelectContext);
    if (context === undefined) {
      throw new Error("useSubject must be used within a SubjectProvider");
    }
    return context;
};
