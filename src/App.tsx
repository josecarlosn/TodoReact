import { useEffect } from 'react'
import './App.css'
import Container from './components/Container/Container'
import Navbar from './components/Navbar/Navbar'
import { TaskProvider } from './Context/TaskContext'
import EditModal from './components/EditModal/EditModal'
import { EditTaskProvider, useEditContext } from './Context/EditContext'
import DeleteModal from './components/DeleteModal/DeleteModal'



function App() {

  const {editVisibility} = useEditContext()
  return (

    <div className="bg-white h-screen flex justify-center items-center w-full">
      <Navbar/>
      <Container/>
      <EditModal/>  
      <DeleteModal/>    
    </div>

  )
}

export default App
