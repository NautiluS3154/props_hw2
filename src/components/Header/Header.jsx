import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
<nav className="navbar">
  <a className="logo" href="#">Игровой Магазин</a>
  <ul className="navbar-menu">
    <li><a href="#">Домой</a></li>
    <li><a href="#">Магазин</a></li>
    <li><a href="#">Новинки</a></li>
    <li><a href="#">Лучшее</a></li>
    <li><a href="#">Скидки</a></li>
    <li><a href="#">О нас</a></li>
    <li><a href="#">Контакт</a></li>
  </ul>
</nav>



    </div>
  );
}

export default Header;
