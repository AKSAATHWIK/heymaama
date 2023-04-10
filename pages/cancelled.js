import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsFillBagXFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';


const Cancelled = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    
    useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);
     
    }, []);
  

  return (
    <div className="cancelled-wrapper">
      <div className="cancelled">
        <p className="icon">
          <BsFillBagXFill />
        </p>
        <h2>Sorry,Your order was cancelled!</h2>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:heymaamastore@gmail.com">
            heymaamastore@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cancelled
