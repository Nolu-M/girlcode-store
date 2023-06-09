import React from 'react'

export default function() {
    return (
        <nav>
            <div>
                <img className="shopping-cart" src="/cart.png" alt="shopping cart image"/>
                <a className="logo" href="#">ShopCart</a>
            </div>
            <div>
                <select className="navbar-options">
                    <option value="categories">Categories</option>
                    <option value="laptops">Laptops</option>
                    <option value="desktop-pcs">Desktop PCs</option>
                    <option value="mechanical-keyboards">Mechanical keyboards</option>
                    <option value="Laptops">Laptops</option>
                </select>
            </div>
            <div>
                <a href="#">Deals</a>
            </div>
            <div>
                <a href="#">What's New</a>
            </div>
            <div>
                <a href="#">Delivery</a>
            </div>
            <div className="navbar-search">
            <i className="search-bar-icon">
                <span className="material-symbols-outlined">search</span>
            </i>
                <input className="search-bar" type="text" placeholder='Search Product'/>
            </div>
            <div className="navbar-account">
                <span className="material-symbols-outlined">person</span>
                <a href="#">Account</a>
            </div>
            <div className="navbar-cart">
                <span className="material-symbols-outlined">shopping_cart</span>
                <a href="#">Cart</a>
            </div>
        </nav>
    )
}