import api from "../services/api";
import {useState} from "react";

export function useTask(){
    const [task, setTask] = useState([])
    const fetchTasks = async ()=>{
        await api.get("/tasks")
            .then((response) => {setTask(response.data); console.log(response.data); })
            .catch((error) => {console.log("Erro de requisição: ", error)})
    }

    const createTask = async (task: Object) => {
        await api.post("/create", task);
        fetchTasks();
    }
    return {fetchTasks, createTask}
}
