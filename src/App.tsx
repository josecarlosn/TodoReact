import { useEffect } from 'react'
import './App.css'
import AddModal from './components/AddModal/AddModal'
import Navbar from './components/Navbar/Navbar'
import { useTask } from './hooks/useTask'

function App() {
  const {fetchTasks} = useTask()
  useEffect(()=>{
    fetchTasks()
  }, [])
  return (
    
    <>
        <div className="bg-white h-screen flex justify-center items-center w-full">
          <Navbar/>
          <AddModal/>        
        </div>
    </>
  )
}

export default App
