import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
// Context
import { AuthProvider } from './context/AuthContext'
// Component
import AppRoutes from './components/auth/AppRoutes'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
