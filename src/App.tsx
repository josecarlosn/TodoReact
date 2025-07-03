import { useEffect } from 'react'
import './App.css'
import Container from './components/Container/Container'
import Navbar from './components/Navbar/Navbar'
import { TaskProvider } from './Context/TaskContext'
import EditModal from './components/EditModal/EditModal'
import { EditTaskProvider } from './Context/EditContext'



function App() {


  return (

       <TaskProvider>
        <EditTaskProvider>
          <div className="bg-white h-screen flex justify-center items-center w-full">
            <Navbar/>
            <Container/>
            <EditModal visibility={''}/>      
          </div>
        </EditTaskProvider>
          
        </TaskProvider> 
  )
}

export default App
