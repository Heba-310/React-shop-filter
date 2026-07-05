import {  useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

function Details(){
const api="https://dummyjson.com/products";
const {id}=useParams()
const [p,sep]=useState([{}])
useEffect(()=>
{

fetch(`https://dummyjson.com/products/${id}`)
.then((res)=>res.json())
.then((data)=>{
  
    
   sep(data) 
});

},[id]


)
    return(
        <>
<img src={p.images}/>
   <h2>{p.title}</h2>
    <p>{p.description}</p>
    <h4>{p.price} $</h4>

</>
    )
}
export default Details;