import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Toast from './components/Toast'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(() => window.innerWidth > 950)
  const [toast, setToast] = useState(null)
  return <div className="app-shell">
    <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    {menuOpen && <button className="sidebar-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}
    <main className="main-area">
      <Topbar menuOpen={menuOpen} onMenu={() => setMenuOpen(true)} />
      <div className="content"><AppRoutes notify={setToast} /></div>
    </main>
    {toast && <Toast message={toast} onClose={() => setToast(null)} />}
  </div>
}
