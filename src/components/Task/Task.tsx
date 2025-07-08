import * as React from 'react';
import './Task.css'
import { useState } from 'react';
import EditModal from '../EditModal/EditModal';
import { useEditContext } from '../../context/EditContext';
import { useDeleteContext } from '../../context/DeleteContext';
import { useTaskContext } from '../../context/TaskContext';

export interface ITaskProps {
  title: string;
  description: string;
  toggle: any;
  id: number;
  activeIndex: any;
  completed: boolean;
  createdAt: string;
}

export default function Task (props: ITaskProps) {
  const [isCheck, setIsCheck] = useState("checked");
  const [isVisible, setVisibility] = useState("");
  const {updateTask} = useTaskContext()
  const {editTask, setEditVisibility, editVisibility, setContainerBlock} = useEditContext()
  const {deleteTask, setDeleteVisibility, setContainerDeleteBlock} = useDeleteContext();
  const time = new Date(props.createdAt)
  const date = time.toLocaleDateString("pt-br")
  const hour = time.toLocaleTimeString("pt-br",{
  hour: '2-digit',
  minute: '2-digit',
})
  return (
    <>
      <div className={`bg-white w-120 h-auto m-1  mt-2 shadow-sm rounded-xl ${props.completed  ? "checked" : ""} self-start`}>

        <div  className='flex flex-row justify-between h-14 p-0 overflow-hidden' >
            <div  className='flex flex-row gap-1 '>
                <div className='flex items-center m-2'>
                    <input className='box' type="checkbox" onClick={()=>{
                      if(props.completed){
                        var task = {
                          title: props.title,
                          description: props.description,
                          completed: false
                        }
                        updateTask(props.id, task);
                      }else if(props.completed == false){
                        var task = {
                          title: props.title,
                          description: props.description,
                          completed: true
                        }
                        updateTask(props.id ,task);
                      }
                      
                    }} checked={props.completed} name="" id="" /> 
                </div>

                <div onClick={props.toggle}  className='flex flex-col w-75 justify-start cursor-pointer'>
                    <p className='text-stone-500 text-[0.6rem]'>{date}  {hour}</p>
                    <h1 className={`title font-bold h-auto m-0 p-0 ${props.completed ? "text-checked" : "text-stone-700"}  text-[0.9rem]`}>{props.title}</h1>
                </div>
            </div>
            <div className='flex flex-row  items-center pr-1.5 bg-white rounded-4xl z-30'>
                <svg onClick={()=>{
                  editTask( props.id, props.title, props.description, props.completed);
                  setEditVisibility(true);
                  setContainerBlock("blocked")
    
                  }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-5 -5 36 36" stroke-width="2" stroke="currentColor" className="size-7 text-stone-600 hover:bg-stone-100 rounded-2xl cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>

                <svg onClick={()=>{
                  deleteTask( props.id, props.title, props.description);
                  setDeleteVisibility(true);
                  setContainerBlock("blocked")
    
                  }}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-5 -5 36 36" stroke-width="2" stroke="currentColor" className="size-7 text-stone-600 hover:text-red-500 hover:bg-stone-100 rounded-2xl cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>

            </div>
                  
          
            </div>
              <div className="">
              {props.activeIndex === props.id && (
                  <div className={`${props.description == "" ? "text-stone-300": ""} px-4 pb-3 text-[0.8rem] text-gray-700 bg-white ml-5 rounded-2xl`}>
                      {props.description == "" ? "This task has no additional details." : props.description}
                  </div>

              )}
            </div>
            
      </div>
    </>
  );
}
