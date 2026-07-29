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
export const getAssets=async()=>{
    const response=await fetch(`${url}/asset/all`,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
        
    })
    const result=response.json();
    return result;

}