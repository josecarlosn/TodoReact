import * as React from 'react';
import buttonStyle from '../GlobalStyles';
export interface IAppProps {
  toggleModalVisibility: any;
}

export default function App (props: IAppProps) {

  return (
      <>
        <button onClick={props.toggleModalVisibility}
            type='button'
            className={`${buttonStyle} bg-blue-600  hover:bg-blue-800`} 
         >Add Task</button>
      </>
  );
}
