import React from 'react';
import './Main.css';
import Button from '../Button/Button'

const Main = (props) => {

  const {image, title, desc,price} = props
return (
  <div className='main-shoes'>
  <div className= 'shoes'>
      <img src={image} alt="image_catalog" />
      <div className="block_title">
          <p className="title">{title}</p>
          <p className="desc">{desc}</p>
          <p className="price">{price}$</p>
          <Button titleBtn ="Купить"/>
      </div>
      
  </div>
  </div>
);
}

export default Main;