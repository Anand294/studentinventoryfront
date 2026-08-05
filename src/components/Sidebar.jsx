import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../data/navigation'
import Icon from './Icon'

function NavGroup({ item, onNavigate }) {
  const { pathname } = useLocation()
  console.log(pathname)
  const active = item.children?.some(child => pathname === child.path)
  const [open, setOpen] = useState(active)
  if (!item.children) return <NavLink to={item.path} onClick={onNavigate} className={({ isActive }) => `link primary-link ${isActive ? 'active' : ''}`}><Icon name={item.icon} /><span>{item.label}</span></NavLink>
  return <div className="menu-group"><button className={`menu-title ${open ? 'menu-title-open' : ''}`} onClick={() => setOpen(!open)}><Icon name={item.icon} /><span>{item.label}</span><Icon name="down" size={16} /></button><div className={`submenu ${open ? 'submenu-open' : ''}`}><div>{item.children.map(child => <NavLink key={child.path} to={child.path} end onClick={onNavigate} className={({ isActive }) => `link ${isActive ? 'active' : ''}`}><Icon name="plus" size={13}/>{child.label}</NavLink>)}</div></div></div>
}
export default function Sidebar({ open, onClose }) {
  const closeOnMobileOnly = () => { if (window.innerWidth <= 950) onClose() }
  return <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}><div className="brand"><div className="brand-mark">N</div><div><b>Northstar</b><span>INVENTORY PORTAL</span></div><button onClick={onClose} className="sidebar-toggle" title="Hide navigation" aria-label="Hide navigation"><Icon name="arrowLeft" size={18}/></button><button onClick={onClose} className="sidebar-close"><Icon name="close"/></button></div><nav className="nav-menu"><p className="nav-label">MAIN MENU</p>{navigation.map(item => <NavGroup key={item.label} item={item} onNavigate={closeOnMobileOnly}/>)}</nav><div className="sidebar-help"><span>✦</span><div><b>Need a hand?</b><p>Explore the help center</p></div></div><div className="sidebar-user"><span>AS</span><div><b>Alex Smith</b><small>Admin account</small></div></div></aside>
}
