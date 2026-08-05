import { Children } from "react";
import RecordsPage from "../../pages/RecordsPage";
import RecordForm from "../../pages/RecordForm";
import Layout from "../../menu/Layout";

export const AssetRoute={
path:"/asset",
element:<Layout/>,
children:[
    {index:true,element:<RecordsPage type={"asset"}/>},
    {path:"add", element:<RecordForm type={"asset"}/>}
    
]

}