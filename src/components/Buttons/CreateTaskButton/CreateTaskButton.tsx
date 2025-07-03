import { useTaskContext } from '../../../Context/TaskContext';
import type TaskType from '../../../Types/TaskType';
import buttonStyle from '../../GlobalStyles';
import GlobalStyles from '../../GlobalStyles';
import { useState } from 'react';

export interface ICreateTaskButtonProps {
    name: string;
    title: string;
    description: string;
    closeCreateModel: any;
    showAlert: any;
}

export default function SaveTaskButton (props: ICreateTaskButtonProps) {
  
  const [buttonLocked, setButtonLocked] = useState<Boolean>(false);
  const {createTask} = useTaskContext()
  const handleClick = async (title: String)=> {
  
  
    if(title != ""){
      props.showAlert()
      setButtonLocked(true);
      const task: Omit<TaskType, "id" | "createdAt"> = {
        title: props.title,
        description: props.description,
        completed: false
      } 
      await createTask(task)
      setButtonLocked(false);
      props.closeCreateModel()
    }
    else{
      props.showAlert()
    }
  }

  return (
    <>
      
      <button onClick={()=>{handleClick(props.title);}}  className={`${buttonLocked! ? "opacity-50 cursor-not-allowed": ""} ${buttonStyle} bg-blue-600 hover:bg-blue-700`} type="button">{props.name}</button>
    </>
    
    
  );
}
