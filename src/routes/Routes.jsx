import { createBrowserRouter } from "react-router-dom";
import { studentRoute } from "../component/students/StudentRoutes";
import Dashboard from "../pages/Dashboard";
import Layout from "../menu/Layout";

export const routes=createBrowserRouter([
    {path:"/",
    element:<Layout/>,children:[{index:true,element:<Dashboard/>}]},
    studentRoute
])