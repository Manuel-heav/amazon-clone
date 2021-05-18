import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider';
import { auth } from './Firebase'
const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();


    const login = () => {
        if(user){
            auth.signOut();
        }
    }
    console.log(basket)
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
                {/* First link */}
                    <Link to={!user && "/login"} className="header__link">
                        <div onClick={login} className="header__option">
                            <span className="header__optionLineOne">Hello, {user?.email}</span>
                            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                {/* Second link */}
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
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
            </div>
        </nav>
    )
}

export default Header
