import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TaskProvider } from './Context/TaskContext.tsx'
import { EditTaskProvider } from './Context/EditContext.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <TaskProvider>
      <EditTaskProvider>
            <App />
      </EditTaskProvider>
    </TaskProvider> 
  </StrictMode>,
)
