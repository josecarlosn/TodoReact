import './App.css'
import AddButton from './components/Buttons/AddButton/AddButton'
import AddModal from './components/AddModal/AddModal'
import api from './services/api'
import Navbar from './components/Navbar/Navbar'
import { useEffect } from 'react'


function App() {
  useEffect(()=>{
    api.get("/tasks")
    .then(response => console.log(response))
  })
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
