import { url } from "../../Config"

export const saveStudents=async(data)=>{
    const response=await fetch(`${url}/student/add`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({...data})
    })
    const result=response.json();
    return result;

}
export const getStudents=async()=>{
    const response=await fetch(`${url}/student/all`,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
        
    })
    const result=response.json();
    return result;

}
export const getStudentById=async(id)=>{
    const response=await fetch(`${url}/student/${id}`,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
        
    })
    const result=response.json();
    return result;
}
