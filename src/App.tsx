import './App.css'
import Container from './components/Container/Container'
import Navbar from './components/Navbar/Navbar'
import EditModal from './components/EditModal/EditModal'
import DeleteModal from './components/DeleteModal/DeleteModal'



function App() {
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
