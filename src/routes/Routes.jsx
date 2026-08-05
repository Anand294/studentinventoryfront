import { createBrowserRouter } from "react-router-dom";
import { studentRoute } from "../components/student/StudentRoutes";
import Dashboard from "../pages/Dashboard";
import Layout from "../menu/Layout";
import { AssetRoute } from "../components/asset/AssetRoute";

export const routes=createBrowserRouter([
    {path:"/",
    element:<Layout/>,children:[{index:true,element:<Dashboard/>}]},
    studentRoute,
    AssetRoute
])