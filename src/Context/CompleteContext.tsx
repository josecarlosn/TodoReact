import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type TaskType from "../Types/TaskType";
import api from "../services/api";


interface TaskContextType{
    tasks: TaskType[],
    fetchTasks: () => Promise<void>,
    deleteTask: (id:number) => Promise<void>,
    createTask: (task: Omit<TaskType, "id" | "createdAt">) => Promise<void>,
    updateTask: (id: number, task: Partial<Omit<TaskType, "id" | "createdAt">>) => Promise<void>,
    setCompleted: (id: number, completed: boolean)=>Promise<void>
}
//Preciso criar um Contexto e um Provider

//Contexto
const TaskContext = createContext<TaskContextType | undefined>(undefined);

//Provider
export const TaskProvider = ({children}:{children: ReactNode}) =>{
    const [tasks, setTasks] = useState<TaskType[]>([]);

    const fetchTasks = async () => {
       await api.get("/tasks")
       .then((response)=>{setTasks(response.data)})
       .catch((error)=>{console.log("Erro de requisição get" + error)})
    }
    const createTask = async (task: Omit<TaskType, "id" | "createdAt">) => {
        await api.post("/create", task)
        .then(()=>{
            console.log(console.log(task));
            fetchTasks()
        })
        .catch((error)=>{console.log("Erro de requisição post" + error)})
    }
    const deleteTask = async (id: number) => {
        await api.delete(`/delete/${id}`)
        .then(()=>{
            console.log(`Tarefa com o id: ${id} deletada.`);
            fetchTasks();
        })
        .catch((error)=>console.log("Erro ao deletar tarefa: " + error))
    }
    const updateTask = async (id: number, task: Partial<Omit<TaskType, "id" | "createdAt">>) => {
        await api.put(`/update/${id}`, task)
        .then(()=>{
            console.log(`Tarefa de ID: ${id}, atualizada com sucesso!`);
            fetchTasks()
        })
        .catch((error)=>console.log("Erro ao atualizar a tarefa:  ERRO 400"))
    }
    
     useEffect(()=>{
        fetchTasks()
    }, [])

    return <TaskContext.Provider value={{tasks, fetchTasks, createTask, deleteTask, updateTask}}>{children}</TaskContext.Provider>
}
export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTaskContext deve ser usado dentro de TaskProvider");
    }
    return context;
}


   