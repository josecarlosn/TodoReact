import * as React from 'react';
import { useEffect, useState } from 'react';
import CloseModal from '../Buttons/CloseModal/CloseModal';
import { useEditContext } from '../../Context/EditContext';
import './EditModal.css'
import EditTaskButton from '../Buttons/EditTaskButton/EditTaskButton';
import { useTaskContext } from '../../Context/TaskContext';
export interface IEditModalProps {
}

export default function EditModal (props: IEditModalProps) {
    const {titleToEdit, descriptionToEdit, completedToEdit, setEditVisibility, editVisibility, setContainerBlock} = useEditContext();
    const [title, setTitle] = useState(titleToEdit);
    const [description, setDescription] = useState(descriptionToEdit);
    const [completed, setCompleted] = useState(completedToEdit);
    const visibilityClass: string = "hidden"
    const [alert, setAlert] = useState("hidden")
    const {idToEdit} = useEditContext()
    
    
    useEffect(() => {
        setTitle(titleToEdit);
        setDescription(descriptionToEdit);
        setCompleted(completedToEdit)
        
    }, [titleToEdit, descriptionToEdit, completedToEdit]);
  return (
   

    <form  method='post' className={` bg-white ${editVisibility ? "in" : visibilityClass} absolute shadow-xl w-[400px] h-[250px] rounded-2xl flex flex-col editModal`}>        
        <div className="bg-white h-screen m-2 pt-5 ">
            <p className='rounded-md text-center text-[0.7rem] text-blue-500 border-1 p-[1px] w-12'>Editing</p>
        <div className='border-b-1 border-stone-400'>
            
            <input maxLength={50} onChange={(e) =>{setTitle(e.target.value)}} value={title} type="text" id="title" className="outline-0 text-[1.3rem] block w-full  dark:placeholder-gray-400 text-stone-700" placeholder="Task title" required />
        </div>  
        <div className='h-auto' >
            <textarea maxLength={155} rows={3} onChange={(e)=>{setDescription(e.target.value)}} value={description} id="description" className="resize-none break-words h-full outline-0 text-[1rem] block w-full  dark:placeholder-gray-400 text-stone-700" placeholder="Task description" required />
        </div>  
        
        </div>
        <div className='flex justify-end m-2 bg-white'><p className='text-[0.7rem] text-stone-600'>{description.length}/155</p></div>
        <div className="flex justify-between m-2">
        <CloseModal name="Abort" closeCreateModal={async ()=>{
            setAlert("hidden")
            setEditVisibility(false)
            setContainerBlock("") 
            setTitle(titleToEdit);
            setDescription(descriptionToEdit);
            
            }
            }/>
            <EditTaskButton name={"Save"} title={title} description={description} id={idToEdit} completed={completedToEdit} closeCreateModel = {()=>{
              setContainerBlock("")
              setEditVisibility(false)
              setTitle("");
              setDescription("");  
              setCompleted(completed)
            }}/>
        </div>
        
        <div className ={`animate-pulse flex flex-row items-center ${alert} p-2 mt-4 text-[1rem] text-white rounded-lg bg-red-400 dark:text-white font-bold`} role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
        </svg>
            <span className='ml-1'> Title is a required field.</span>
        </div>
    </form>
  );
}
