import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TaskProvider } from './context/TaskContext.tsx'
import { EditTaskProvider } from './context/EditContext.tsx'
import { DeleteTaskProvider } from './context/DeleteContext.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <TaskProvider>
      <DeleteTaskProvider>
        <EditTaskProvider>
          <App />
        </EditTaskProvider>
      </DeleteTaskProvider>
    </TaskProvider> 
  </StrictMode>,
)
