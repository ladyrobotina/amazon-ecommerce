import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon" />
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className='header_option'>
                    <span className="header_optionLineOne">Hello guest</span>
                    <span className="header_optionLineTwoo">Sign in</span>
                </div>
                <div className='header_option'>
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwoo">Orders</span>
                </div>
                <div className='header_option'>
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwoo">Prime</span>
                </div>
                <div className="header_optionBascket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwoo header_bascketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
