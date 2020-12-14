import React from "react";

const ProductInfo = (props) => {
  return (
    <div className='infoPage'>
      <div className="description">
        <p className='name'>{props.info.name}</p>
        <p className='price'>$ {props.info.price}</p>
        <p className='about'>{props.info.description}</p>
      </div>
      <div className='imageContainer'>
        <img src={props.info.imgURL} alt='' className='image' />
        </div>
    </div>
  );
};

export default ProductInfo;
