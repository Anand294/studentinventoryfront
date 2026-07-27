import { url } from "../../Config"

export const saveAssets=async(data)=>{
    const response=await fetch(`${url}/asset/add`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({...data})
    })
    const result=response.json();
    return result;

}