import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Plus, ShoppingCart } from "phosphor-react";
import { Shopcontex } from "../context/shop-contex";
import "./nevbar.css";
export const Nevbar = () => {
  const { getTotalItem, user } = useContext(Shopcontex);
  return (
    <div className="navbar">
      {user ? (
        <div className="links">
          <Link to="/shop" className="shopLink">
            Shop
          </Link>

          <Link to="/cart" className="cartLink">
            <ShoppingCart />({getTotalItem()})
          </Link>
          <Link to="/form">
            <Plus />
          </Link>
        </div>
      ) : (
        <div className="links">
          {" "}
          <Link to="/" className="shopLink">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};
