import { url } from "../../Config"

export const saveRequest=async(data)=>{
    const response=await fetch(`${url}/request/add`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({...data})
    })
    const result=response.json();
    return result;

}
export const getRequest=async()=>{
    const response=await fetch(`${url}/request/all`,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
        
    })
    const result=response.json();
    return result;

}
export const getRequestById=async(id)=>{
    const response=await fetch(`${url}/request/${id}`,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
        
    })
    const result=response.json();
    return result;
}
