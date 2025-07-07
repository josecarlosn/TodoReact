import * as React from 'react';
import buttonStyle from '../../GlobalStyles';
import { useState } from 'react';
import type TaskType from '../../../Types/TaskType';
import { useTaskContext } from '../../../Context/TaskContext';

export interface IEditTaskButtonProps {
    completed: boolean | undefined;
    name: string,
    id:number,
    title: string,
    description: string,
    closeCreateModel: any,
    // showAlert: any

}

export default function EditTaskButton (props: IEditTaskButtonProps) {
    const [buttonLocked, setButtonLocked] = useState<Boolean>(false);
    const {updateTask} = useTaskContext()
    const handleClick = async (title: String)=> {
      
      
        if(title != ""){
          // props.showAlert()
          setButtonLocked(true);
          const task: Partial<Omit<TaskType, "id" | "createdAt">> = {
            title: props.title,
            description: props.description,
            completed: props.completed
          } 
          await updateTask(props.id ,task)
          setButtonLocked(false);
          props.closeCreateModel()
        }
        else{
          // props.showAlert()
        }
      }
  return (
    
    <button onClick={()=>{handleClick(props.title);}}  className={`${buttonLocked! ? "opacity-50 cursor-not-allowed": ""} ${buttonStyle} bg-blue-600 hover:bg-blue-700`} type="button">{props.name}</button>
  );
}
