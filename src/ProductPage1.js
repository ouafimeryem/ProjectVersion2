import React,{useEffect,useState} from 'react'
import {Link,useHistory} from 'react-router-dom'

import './ProductPage.css'
import Top from './Top'
import Header  from './Header'


function  ProductPage1({ match }) {
  let params = match.params;
  let history = useHistory();
  const [productss,setProducts] =useState([]);
  const [image,setImage] =useState([]);
  const [name,setName] =useState([]);
  const [price,setPrice] =useState([]);
  const [category,setCategory] =useState([]);

  

   useEffect(() => {
     getProducts();
   }, []);
   
  
   const getProducts = async () => {
     const response = await fetch(`https://asos2.p.rapidapi.com/products/v3/detail?id=${params.id}&lang=en-US&store=US&sizeSchema=US&currency=USD`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f0d3eaf5a8mshd838917fecf0184p13e861jsnc237531769a0",
        "x-rapidapi-host": "asos2.p.rapidapi.com"
       }
     });

     const datas = await response.json();
     setProducts(datas);
     const images = `http://${datas.media.images[0].url}`;
     setImage(images);
     setName(datas.name);
     setPrice(datas.price.current.text);
     setCategory(datas.productType.name);
     
     console.log(datas);
   
    
    
     

   
    

   }
   
  console.log(image);
  
    
  
  return (
    
    <div className="initial">
      <div className="fullscreen">
        <Top />
        <Header />
        <div className="productP">
          <div className="imgP">
            <img  className="imgPP" src={image} />
            <div className="product-details">
              <div className="innerP">
              
                <div>
                  <span className="category">{category}</span>
                </div>
                <h1>{name}</h1>
                
                <div className="additonals">
                  
                  
                </div>
                <div className='qty-price'>
                <span className='price'>{price}</span>
                </div>
                <div  className='btn-row'>
              <button className='add-to-cart'> Add to cart</button>
              <button className='subscribe'> Add to Wishlist</button>
            </div>
            
                  <a className="go-back" onClick={history.goBack}>Back to Shop</a>
                
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductPage1
