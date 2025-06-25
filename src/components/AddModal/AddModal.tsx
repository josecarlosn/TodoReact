import * as React from 'react';
import { useState } from 'react';
import AddButton from '../Buttons/AddButton/AddButton';
import CloseModal from '../Buttons/CloseModal/CloseModal';
import CreateTaskButton from '../Buttons/CreateTaskButton/CreateTaskButton';
import './AddModal.css'
export interface IAddModalProps {
}

export default function App (props: IAddModalProps) {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [title, setTitle] = useState<string>("");
    let [description, setDescription] = useState<string>("");

    const visibilityClass: string = "hidden"

  return (
    <>
        <div>
            <AddButton name="Add Task" openCreateModal={()=>{setModalVisibility(true)}}/>
        </div>
        <form method='post' className={`${modalVisibility ? "in" : visibilityClass} absolute shadow-xl w-[350px] h-[200px] rounded-2xl flex flex-col`}>        
          
          <div className="bg-white h-screen m-2">
            <div className='border-b-1 border-stone-400'>
              <input maxLength={50} onChange={(e) =>{setTitle(e.target.value)}} value={title} type="text" id="title" className="outline-0 text-[1.3rem] block w-full  dark:placeholder-gray-400 text-stone-700" placeholder="Task title" required />
            </div>  
            <div className='h-auto'>
              <textarea maxLength={155} rows={3} onChange={(e)=>{setDescription(e.target.value)}} value={description} id="description" className="resize-none break-words h-full outline-0 text-[1rem] block w-full  dark:placeholder-gray-400 text-stone-700" placeholder="Task description" required />
            </div>  
            
          </div>
            <div className='flex justify-end m-2 bg-white'><p className='text-[0.7rem] text-stone-600'>{description.length}/155</p></div>
          <div className="flex justify-between m-2">
            <CloseModal name="Discart" closeCreateModal={()=>{
              setModalVisibility(false);
              setTitle("");
              setDescription("");  
              }
              }/>
            <CreateTaskButton closeCreateModel = {()=>{
              setModalVisibility(false);
              setTitle("");
              setDescription("");  
            }} name="Create Task" title={title} description={description}/>
          </div>
        </form>
    </>
  );
}
