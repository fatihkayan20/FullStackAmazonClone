import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispath] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <div className="header__searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__link" onClick={handleAuthentication}>
            <span className="header__linkLineOne">
              {" "}
              Hello {user ? user.email : "Guest"}{" "}
            </span>
            <span className="header__linkLineTwo">
              {" "}
              {!user ? "Sign In" : "Log Out"}{" "}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__link">
            <span className="header__linkLineOne"> Returns </span>
            <span className="header__linkLineTwo"> & Orders </span>
          </div>
        </Link>
        <div className="header__link">
          <span className="header__linkLineOne"> Your </span>
          <span className="header__linkLineTwo"> Prime </span>
        </div>
        <Link to="/checkout">
          <div className="header__linkBasket">
            <ShoppingBasketIcon />
            <span className="header__linkLineTwo header__basketCount">
              {" "}
              {basket?.length}{" "}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
