import buttonStyle from '../../GlobalStyles';
import { useTask } from '../../../hooks/useTask';
import GlobalStyles from '../../GlobalStyles';
import { useState } from 'react';

export interface ICreateTaskButtonProps {
    name: string;
    title: String;
    description: String;
    closeCreateModel: any;
}

export default function SaveTaskButton (props: ICreateTaskButtonProps) {
  const {createTask} = useTask();
  const [buttonLocked, setButtonLocked] = useState(false);
  const handleClick = async ()=> {
    
    setButtonLocked(true);
    const task: Object = {
    title: props.title,
    description: props.description
  } 
    await createTask(task)
    setButtonLocked(false);
    props.closeCreateModel()
    
   
  }

  return (
    <button onClick={()=>{handleClick()}} disabled={buttonLocked ? true : false} className={`${buttonLocked! ? "opacity-50 cursor-not-allowed": ""} ${buttonStyle} bg-blue-600 hover:bg-blue-700`} type="button">{props.name}</button>
  );
}
