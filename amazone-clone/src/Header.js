import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
            <img className="header_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon" />

            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && '/Login'}>
                <div onClick={handleAuthentication} className='header_option'>
                    <span className="header_optionLineOne">Hello guest</span>
                    <span className="header_optionLineTwoo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                <div className='header_option'>
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwoo">Orders</span>
                </div>
                <div className='header_option'>
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwoo">Prime</span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBascket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwoo header_bascketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
