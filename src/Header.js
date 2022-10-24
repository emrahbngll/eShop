import React from "react";
import "./Header.css";
//import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
//import StorefrontIcon from "@material-ui/icons/Storefront";
//import SearchIcon from "@material-ui/icons/Search";
//import { Link } from "react-router-dom";
//import { useStateValue } from "./StateProvider";

function Header() {
  //const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__logo">
        <h2 className="header__logoTitle">eShop</h2>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>

        <div className="nav__itemBasket">
         
          <span className="nav__itemLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
