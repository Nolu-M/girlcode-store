import React from 'react'

export default function() {
    return (
        <nav>
            <div>
                <img class="shopping-cart" src="./public/cart.png" alt="shopping cart image"/>
                <a href="#">ShopCart</a>
            </div>
            <div>
                <select class="navbar-options">
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
            <div class="navbar-search">
            <i class="search-bar-icon">
                <span class="material-symbols-outlined">search</span>
            </i>
                <input class="search-bar" type="text" placeholder='Search Product'/>
            </div>
            <div class="navbar-account">
                <span class="material-symbols-outlined">person</span>
                <a href="#">Account</a>
            </div>
            <div class="navbar-cart">
                <span class="material-symbols-outlined">shopping_cart</span>
                <a href="#">Cart</a>
            </div>
        </nav>
    )
}