import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
const Header = () => {
    return (
        <nav className="header">
            {/* Logo on the left */}
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
                
            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 3 links */}
            <div className="header__nav">
                    <Link to="/login" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Hello,</span>
                            <span className="header__optionLineTwo">Sign In</span>
                        </div>
                    </Link>

                <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Return </span>
                            <span className="header__optionLineTwo">&Orders</span>
                        </div>
                    </Link>

                <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prime</span>
                        </div>
                    </Link>

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </Link>
            
            </div>
        </nav>
    )
}

export default Header
