import * as React from 'react';
import { useEffect, useState } from 'react';
import AddButton from '../Buttons/AddButton/AddButton';
import CloseModal from '../Buttons/CloseModal/CloseModal';
import CreateTaskButton from '../Buttons/CreateTaskButton/CreateTaskButton';
import './Container.css'
import { Accordion } from '../Accordion/Accordion';
import { useTaskContext } from '../../Context/TaskContext';
import { useEditContext } from '../../Context/EditContext';

export interface IContainerProps {
}

export default function Container (props: IContainerProps) {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const visibilityClass: string = "hidden"
    const [alert, setAlert] = useState("hidden")
    const {tasks} = useTaskContext();
    const {containerBlock, setContainerBlock} = useEditContext()

  return (
    <div className={`flex flex-col items-center justify-center`}>
        <div className={`m-10 ${containerBlock}`}>
            <AddButton name="Add Task" openCreateModal={()=>{setModalVisibility(true);setContainerBlock("blocked")}}/>
        </div>

        <Accordion/>

        <form  method='post' className={` bg-white ${modalVisibility ? "in" : visibilityClass} absolute shadow-xl w-[350px] h-[200px] rounded-2xl flex flex-col`}>        
          <div className="bg-white h-screen m-2 ">
            <div className='border-b-1 border-stone-400'>
              
              <input maxLength={40} onChange={(e) =>{setTitle(e.target.value)}} value={title} type="text" id="title" className="outline-0 text-[1.3rem] block w-full  dark:placeholder-gray-400 text-stone-700" placeholder="Task title" required />
            </div>  
            <div className='h-auto' >
              <textarea maxLength={155} rows={3} onChange={(e)=>{setDescription(e.target.value)}} value={description} id="description" className="resize-none break-words h-full outline-0 text-[1rem] block w-full  dark:placeholder-gray-400 text-stone-700" placeholder="Task description" required />
            </div>  
            
          </div>
            <div className='flex justify-end m-2 bg-white'><p className='text-[0.7rem] text-stone-600'>{description.length}/155</p></div>
          <div className="flex justify-between m-2">
            <CloseModal name="Discart" closeCreateModal={()=>{
              setAlert("hidden")
              setModalVisibility(false);
              setTitle("");
              setDescription("");  
              setContainerBlock("")
              }
              }/>
            <CreateTaskButton showAlert={()=>{title === "" ? setAlert("text-red-500 text-[0.8rem]"): setAlert("hidden")}} closeCreateModel = {()=>{
              setModalVisibility(false);
              setTitle("");
              setDescription("");  
            }} name="Create Task" title={title} description={description}/>
          </div>
          <div className ={`animate-pulse flex flex-row items-center ${alert} p-2 mt-4 text-[1rem] text-white rounded-lg bg-red-400 dark:text-white font-bold`} role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
            </svg>
              <span className='ml-1'> Title is a required field.</span>
          </div>
        </form>
        
    </div>
  );
}
