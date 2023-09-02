import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { TodosProvider } from './store/todos'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <BrowserRouter>
    <TodosProvider>
      <App/>
    </TodosProvider>
    </BrowserRouter>
    
  
  </React.StrictMode>,
)
