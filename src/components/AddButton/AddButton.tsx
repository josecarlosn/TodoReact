import * as React from 'react';

export interface IAppProps {
  toggleModalVisibility: any;
}

export default function App (props: IAppProps) {

  return (
      <>
        <button onClick={props.toggleModalVisibility}
            type='button'
            className=' bg-blue-600 rounded-[16px] text-[0.8rem] text-white py-1 px-3 font-bold cursor-pointer hover:bg-blue-800'
         >Add Task</button>
      </>
  );
}
