import * as React from 'react';
import './Navbar.css'
export interface INavbarProps {
}

export default function App (props: INavbarProps) {
  return (
    <>
        <header className=' w-screen flex flex-row fixed  top-0 p-2 border-b-1 border-stone-300'>
            <h2 className='todo text-4xl'>TO DO</h2>
        </header>
    </>
  );
}
