import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type TaskType from "../Types/TaskType";
import api from "../services/api";


interface DeleteTaskContextType{
    idToDelete: number,
    titleToDelete: string,
    descriptionToDelete: string,
    deleteTask: (id:number ,title: string, description: string)=>void,
    setDeleteVisibility: (visibility: boolean ) =>void,
    deleteVisibility: boolean,
    setContainerDeleteBlock: (block: string) =>void,
    containerDeleteBlock: string
}
//Preciso criar um Contexto e um Provider

//Contexto
const DeleteTaskContext = createContext<DeleteTaskContextType | undefined>(undefined);

//Provider
export const DeleteTaskProvider = ({children}:{children: ReactNode}) =>{
    const [titleToDelete, setTitle] = useState("");
    const [descriptionToDelete, setDescription] = useState("");
    const [idToDelete, setId] = useState<number>(-1);
    const [deleteVisibility, setDeleteVisibility] = useState<boolean>(false);
    const [containerDeleteBlock, setContainerDeleteBlock] = useState("");

    const deleteTask = (id: number, title: string, description: string)=>{
        setId(id);
        setTitle(title);
        setDescription(description);
    }
    return <DeleteTaskContext.Provider value={{idToDelete,titleToDelete, descriptionToDelete, deleteTask, deleteVisibility, setDeleteVisibility, setContainerDeleteBlock, containerDeleteBlock}}>{children}</DeleteTaskContext.Provider>
}

export const useDeleteContext = () => {
    const context = useContext(DeleteTaskContext);
    if (!context) {
        throw new Error("useDeleteContext deve ser usado dentro de DeleteProvider");
    }
    return context;
}


   