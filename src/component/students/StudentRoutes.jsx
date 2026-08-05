import { Children } from "react";
import RecordsPage from "../../pages/RecordsPage";
import RecordForm from "../../pages/RecordForm";
import Layout from "../../menu/Layout";

export const studentRoute={
path:"/student",
element:<Layout/>,
children:[
    {index:true,element:<RecordsPage type={"student"}/>},
    {path:"add", element:<RecordForm type={"student"}/>}
    
]

}