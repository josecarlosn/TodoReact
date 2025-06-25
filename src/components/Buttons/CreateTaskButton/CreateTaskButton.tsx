import buttonStyle from '../../GlobalStyles';
import { useTask } from '../../../hooks/useTask';

export interface ICreateTaskButtonProps {
    name: string;
    title: String;
    description: String;
}

export default function SaveTaskButton (props: ICreateTaskButtonProps) {
  const {createTask} = useTask();
  
  const handleClick = ()=> {
    const task: Object = {
    title: props.title,
    description: props.description
  }
    createTask(task)
  }
  return (
    <button onClick={()=>{handleClick()}} className={`${buttonStyle} bg-blue-600 hover:bg-blue-700`} type="button">{props.name}</button>
  );
}
