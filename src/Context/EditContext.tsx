import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type TaskType from "../Types/TaskType";
import api from "../services/api";


interface EditTaskContextType{
    idToEdit: number,
    titleToEdit: string,
    descriptionToEdit: string,
    editTask: (id:number ,title: string, description: string)=>void,
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
    const [idToEdit, setId] = useState<number>(-1);
    const [editVisibility, setEditVisibility] = useState<boolean>(false);
    const [containerBlock, setContainerBlock] = useState("");

    const editTask = (id: number, title: string, description: string)=>{
        setId(id);
        setTitle(title);
        setDescription(description);
    }
    return <EditTaskContext.Provider value={{idToEdit,titleToEdit, descriptionToEdit, editTask, editVisibility, setEditVisibility, setContainerBlock, containerBlock}}>{children}</EditTaskContext.Provider>
}

export const useEditContext = () => {
    const context = useContext(EditTaskContext);
    if (!context) {
        throw new Error("useTaskContext deve ser usado dentro de TaskProvider");
    }
    return context;
}


   