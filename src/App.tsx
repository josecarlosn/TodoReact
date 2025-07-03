import { useEffect } from 'react'
import './App.css'
import Container from './components/Container/Container'
import Navbar from './components/Navbar/Navbar'
import { TaskProvider } from './Context/TaskContext'


function App() {


  return (

       <TaskProvider>
          <div className="bg-white h-screen flex justify-center items-center w-full">
            <Navbar/>
            <Container/>      
          </div>
        </TaskProvider> 
  )
}

export default App
