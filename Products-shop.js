import { use, useEffect, useState } from "react";
import Product from "./Product";
function Products(){

    const[pro,setpro]=useState([])
    const[fil,setfil]=useState(null)
    const[search,setsearch]=useState(null)
    
useEffect(()=>
{

fetch("https://dummyjson.com/products")
.then((res)=>res.json())
.then((data)=>{
    console.log(data.products);
    
   setpro(data.products) 
});

},[]


)
const Filter=(s)=>{
setfil(pro.filter((f)=>f.price>s))

}
const change = (a) => {
  if (!a) {
    setsearch(null);


    return;
  }
  setsearch(
    pro.filter((x) => x.title.toLowerCase().includes(a.toLowerCase()))
  );
};
const all=()=>{
setfil(null);
}

return(
    <div className="cards">
      
       
<div className="container">
        <div className="row my-3">
              <div className="col-12 d-flex justify-content-center align-items-center">
<button className="mx-auto btn btn-primary" onClick={all}>Our Product</button>

<button className="mx-auto btn btn-primary " data-price="100"onClick={((e)=>{
Filter (Number(e.target.dataset.price))
})}>more 100$</button>
<button className="mx-auto btn btn-primary " data-price="50"  onClick={((e)=>{
Filter(Number (e.target.dataset.price))
})}>more 50$</button>
<input type="text" placeholder="search by name of product" onChange={((e)=>{

    change(e.target.value)
})}/>


              </div>
              
  
          
            { search ==""  /*= seach!==null*/ && search.length === 0 ?    <div className="row my-3">  <div className="col-12 d-flex justify-content-center align-items-center">
                
                
              <h1>not found</h1>   
                </div></div> : ""}
          
     

        </div>
    <div className="row my-3">
       
{(search || fil || pro).map((p)=>(
     <div className="col-lg-3 my-3">
    <Product key={p.id} product={p}/>
    </div>
)




)}
</div>
</div>
</div>



)


}
export default Products;