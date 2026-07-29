import { url } from "../../Config"

export const saveTransaction=async(data)=>{
    const response=await fetch(`${url}/transaction/add`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({...data})
    })
    const result=response.json();
    return result;

}
export const getTransaction=async()=>{
    const response=await fetch(`${url}/transaction/all`,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
        
    })
    const result=response.json();
    return result;

}
export const getTransactionById=async(id)=>{
    const response=await fetch(`${url}/transaction/${id}`,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
        
    })
    const result=response.json();
    return result;
}
