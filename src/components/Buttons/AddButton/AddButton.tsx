import * as React from 'react';
import buttonStyle from '../../GlobalStyles';
export interface IAppProps {
  openCreateModal: any;
  name: string;
}

export default function App (props: IAppProps) {

  return (
      <>
        <button onClick={props.openCreateModal}
            type='button'
            className={`${buttonStyle} bg-blue-600  hover:bg-blue-800`} 
         >{props.name}</button>
      </>
  );
}
