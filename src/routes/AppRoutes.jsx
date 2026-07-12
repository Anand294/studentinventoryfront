import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import RecordsPage from '../pages/RecordsPage'
import RecordForm from '../pages/RecordForm'
export default function AppRoutes({ notify }) { return <Routes><Route path="/" element={<Dashboard notify={notify}/>}/><Route path="/assets" element={<RecordsPage type="asset" notify={notify}/>}/><Route path="/assets/new" element={<RecordForm type="asset" notify={notify}/>}/><Route path="/students" element={<RecordsPage type="student" notify={notify}/>}/><Route path="/students/new" element={<RecordForm type="student" notify={notify}/>}/></Routes> }
