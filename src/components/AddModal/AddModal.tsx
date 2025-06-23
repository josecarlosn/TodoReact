import * as React from 'react';
import { useState } from 'react';
import AddButton from '../AddButton/AddButton';

export interface IAddModalProps {
}

export default function App (props: IAddModalProps) {
    const [modalVisibility, setModalVisibility] = useState(false)
    const visibilityClass: String = "hidden"
  return (
    <>
        <div>
            <AddButton toggleModalVisibility={()=>{setModalVisibility(true)}}/>
        </div>
        <div className={`${modalVisibility ? "" : visibilityClass} absolute bg-amber-400 w-[300px] h-[200px] rounded-2xl flex justify-center items-center`}>
            Model
            
        </div>
    </>
  );
}
