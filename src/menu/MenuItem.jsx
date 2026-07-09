import { useState } from "react";
import {Navlink} from "react-router-dom";

export default function MenuItem({item}){
    const [open, setOpen]=useState(false);
    if(item.subMenu){
        return(
            <div className="menu-Item">
                <div className="menu-title"
                onClick={()=>setOpen(prev=>!prev)}>
                    {item.title}
                    <span>{open?"-":"+"}</span>
                 </div>
           
            {open&&
                <div className="subMenu">
                {item.subMenu.map((sub,index)=>(
                    <MenuItem key={index} item={sub}/>
                ))
                }</div>
            }
             </div>
        )
    }
    return(
        <Navlink>
           to={item.path} 
           className={({isActive})=>isActive?"active link":"link"}
           {item.title}
        </Navlink>
    )
}