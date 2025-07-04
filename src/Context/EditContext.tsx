import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type TaskType from "../Types/TaskType";
import api from "../services/api";


interface EditTaskContextType{
    titleToEdit: string,
    descriptionToEdit: string,
    editTask: (title: string, description: string)=>void,
    setEditVisibility: (visibility: boolean ) =>void,
    editVisibility: boolean,
    setContainerBlock: (block: string) =>void,
    containerBlock: string
}
//Preciso criar um Contexto e um Provider

//Contexto
const EditTaskContext = createContext<EditTaskContextType | undefined>(undefined);

//Provider
export const EditTaskProvider = ({children}:{children: ReactNode}) =>{
    const [titleToEdit, setTitle] = useState("");
    const [descriptionToEdit, setDescription] = useState("");
    const [editVisibility, setEditVisibility] = useState<boolean>(false);
    const [containerBlock, setContainerBlock] = useState("");

    const editTask = (title: string, description: string)=>{
        setTitle(title);
        setDescription(description);
    }
    return <EditTaskContext.Provider value={{titleToEdit, descriptionToEdit, editTask, editVisibility, setEditVisibility, setContainerBlock, containerBlock}}>{children}</EditTaskContext.Provider>
}

export const useEditContext = () => {
    const context = useContext(EditTaskContext);
    if (!context) {
        throw new Error("useTaskContext deve ser usado dentro de TaskProvider");
    }
    return context;
}


   