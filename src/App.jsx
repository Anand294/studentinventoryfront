import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Toast from './components/Toast'
import AppRoutes from './routes/AppRoutes'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(() => window.innerWidth > 950)
  const [toast, setToast] = useState(null)
  return <RouterProvider router={routes}/>
   
}
