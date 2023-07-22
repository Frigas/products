import React,{useState,useEffect} from 'react'
import "../App.css"
import axios from 'axios'



const Product = () => {
const [loading,setLoading] =useState (true);
const [data,setData] =useState ([]);
useEffect(() => {
  axios({
    method:"GET",
    url:"https://fakestoreapi.com/products"
  }).then(res=> {
    console.log(res.data)
    setData(res.data)
  }).catch(e=>console.log(e))
  .finally(()=>setLoading(false));
},[])

    return (
    <div className="product-container">{loading && (<div><h1>loading...</h1>
    </div>
    )}
    {data.map((product)=>
    (
        <div key={product.id} className='card'>
            <div><img src={product.image} alt="#"/></div>
            <div className="card-description">
            </div>
                <h6>{product.title}</h6>
                <h6>{`price:${product.price}`}</h6>
                <h6>{`category:${product.category}`}</h6>
        </div>)
    )}
    </div>

  );
};


export default Product;