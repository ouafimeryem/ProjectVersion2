import React, { useEffect } from 'react'
import './Product.css'
import Aos from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom'

const Product = ({count,title,image,price}) => {
  useEffect(() => {
    Aos.init({duration:2000})
    
  }, []);
  // const images = `https://${image}`;
  
  return (
    <Link to={'/ProductPage/'+count }>
    <div data-aos="slide-right" className="product">
      {/* <button className="btn1" type="submit">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="btn2" type="submit">
                    <i className="fa fa-cart-plus"></i>
                  </button> */}
      
      
      <img src={image} />
      <h6>{title}</h6>
      <p>{price}</p>
      
      
    </div>
    </Link>
  )
}

export default Product  
