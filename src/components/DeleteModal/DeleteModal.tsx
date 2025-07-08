import * as React from 'react';
import CloseModal from '../Buttons/CloseModal/CloseModal';
import { useEditContext } from '../../context/EditContext';
import { useDeleteContext } from '../../context/DeleteContext';
import buttonStyle from '../GlobalStyles';
import { useTaskContext } from '../../context/TaskContext';

export interface IDeleteModalProps {
}

export default function DeleteModal (props: IDeleteModalProps) {
    const {deleteVisibility, setDeleteVisibility, titleToDelete, descriptionToDelete, idToDelete} = useDeleteContext();
    const {setContainerBlock} = useEditContext()
    const visibilityClass: string = "hidden";
    const {deleteTask} = useTaskContext()
  return (
      <div  className={` bg-white ${deleteVisibility ? "in" : visibilityClass} absolute shadow-xl w-[350px] h-[200px] rounded-2xl flex flex-col`}>        
            <div className="bg-white h-screen m-2 flex items-center justify-center text-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-12 text-red-600">
                  <path fill-rule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>

                <h2 className='text-[1rem] font-bold text-stone-800'>This task will be permanently deleted <br/> Do you wish to continue?</h2>
             
  
            </div>
            <div className="flex justify-between m-2">

            <button className="text-red-500 bg-white rounded-[16px] text-[0.8rem] py-2 px-3 font-bold cursor-pointer border-red-500" onClick={()=>{
              setDeleteVisibility(false)
              setContainerBlock("")
              
            }}>Cancel</button>
            <button onClick={()=>{
              setDeleteVisibility(false)
              setContainerBlock("")
              deleteTask(idToDelete);
            }} className={`${buttonStyle} bg-red-500 hover:bg-red-600 `}>Delete</button>
            </div>
        </div>
      );
    }


