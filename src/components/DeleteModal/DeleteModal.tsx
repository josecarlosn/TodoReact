import * as React from 'react';
import CloseModal from '../Buttons/CloseModal/CloseModal';
import { useEditContext } from '../../Context/EditContext';
import { useDeleteContext } from '../../Context/DeleteContext';

export interface IDeleteModalProps {
}

export default function DeleteModal (props: IDeleteModalProps) {
    const {deleteVisibility, setDeleteVisibility} = useDeleteContext();
    const visibilityClass: string = "hidden";
  return (
    <form  method='post' className={` bg-white ${deleteVisibility ? "in" : visibilityClass} absolute shadow-xl w-[350px] h-[200px] rounded-2xl flex flex-col`}>        
            <div className="bg-white h-screen m-2">
                adgadgadgadga
            </div>
            <div className="flex justify-between m-2">
            <CloseModal name="Abort" closeCreateModal={async ()=>{
                setDeleteVisibility(false)
                }
            }/>
            </div>
        </form>
      );
    }


