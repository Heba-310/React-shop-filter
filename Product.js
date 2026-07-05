

import {Routes,Route,Link} from 'react-router-dom'


function Product(props){
return(


<>

<div className="card" style={{width: 18 +'rem'}}>
  <img src={props.product.images} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.product.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  <Link to={`/product/${props.product.id}`}>
    <button>Details</button>
</Link>
  </div>
</div>
</>
)




}
export default Product;