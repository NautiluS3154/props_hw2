import React from 'react';
import './Account.css';

const Account = (props) => {

  const {pic, name1, price1, text1} = props
return (
    <div className='account-main'>
  <div className= 'account'>
  <img className="card-image" src={pic} alt="Game Account" />
  <div className="card-content">
    <h3 className="card-title">{name1}</h3>
    <p className="card-price">${price1}</p>
    <p className="card-description">{text1}</p>
    <a className="card-button" href="#">Купить</a>
  </div>

      
  </div>
  </div>
);
}

export default Account;