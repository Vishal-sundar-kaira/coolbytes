import React,{useState} from "react";
import productcontext from "./productcontext";

const Productsstate = (props) => {
    const host="http://localhost:5000"
    const[list,setlist]=useState([])
    const getlist=async()=>{
        const response=await fetch(`${host}/api/retail/fetchallproduct`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token':localStorage.getItem('token')
              }, 
        })
        const json=response.json()
        console.log(json)
        setlist(json)
        
    }
    const addlist=async(product,date,price)=>{
        const response=await fetch(`${host}/api/retail/Addproducts`,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'auth-token':localStorage.getItem('token')
            },
            body:JSON.stringify({product,date,price})
        })
        const json=await response.json();
        setlist(list.concat(json));
    }
  return (
    <productcontext.Provider value={{list,getlist,addlist}}>
    {props.children}
</productcontext.Provider>
  )
}

export default Productsstate
