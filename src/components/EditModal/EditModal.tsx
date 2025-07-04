import * as React from 'react';
import { useState } from 'react';
import CloseModal from '../Buttons/CloseModal/CloseModal';
import { useEditContext } from '../../Context/EditContext';

export interface IEditModalProps {
}

export default function EditModal (props: IEditModalProps) {
    const {titleToEdit, descriptionToEdit, setEditVisibility, editVisibility} = useEditContext();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const visibilityClass: string = "hidden"
    const [alert, setAlert] = useState("hidden")
    

 
  return (
   

    <form  method='post' className={` bg-white ${editVisibility ? "in" : visibilityClass} absolute shadow-xl w-[350px] h-[200px] rounded-2xl flex flex-col`}>        
        <div className="bg-white h-screen m-2">
        <div className='border-b-1 border-stone-400'>
            
            <input maxLength={50} onChange={(e) =>{setTitle(e.target.value)}} value={titleToEdit} type="text" id="title" className="outline-0 text-[1.3rem] block w-full  dark:placeholder-gray-400 text-stone-700" placeholder="Task title" required />
        </div>  
        <div className='h-auto' >
            <textarea maxLength={155} rows={3} onChange={(e)=>{setDescription(e.target.value)}} value={descriptionToEdit} id="description" className="resize-none break-words h-full outline-0 text-[1rem] block w-full  dark:placeholder-gray-400 text-stone-700" placeholder="Task description" required />
        </div>  
        
        </div>
        <div className='flex justify-end m-2 bg-white'><p className='text-[0.7rem] text-stone-600'>{description.length}/155</p></div>
        <div className="flex justify-between m-2">
        <CloseModal name="Abort" closeCreateModal={async ()=>{
            setAlert("hidden")
            await setEditVisibility(false)
            console.log(editVisibility)
            setTitle("");
            setDescription("");  
            }
            }/>

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
