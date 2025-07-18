import * as React from 'react';
import buttonStyle from '../../GlobalStyles';
import { useEditContext } from '../../../context/EditContext';
export interface IAppProps {
  openCreateModal: any;
  name: string;
}

export default function App (props: IAppProps) {

  return (
      
      <>
        <button onClick={props.openCreateModal }
            type='button'
            className={`flex ${buttonStyle} bg-blue-600  hover:bg-blue-800`} 
         >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>
        {props.name}</button>
      </>
  );
}
