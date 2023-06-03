import React from "react";
import './Button.css';
import image from '../../assets/Button_img/add-to-basket.png'


const Button = (props) =>{
    
    const {titleBtn} = props
    return(
        <button className="btn">
            {titleBtn}
            <img src={image} alt="" className="btn_img" />
        </button>
    )
}


export default Button;