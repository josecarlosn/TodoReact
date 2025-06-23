import './App.css'
import AddButton from './components/AddButton/AddButton'
import AddModal from './components/AddModal/AddModal'

import Navbar from './components/Navbar/Navbar'


function App() {
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
