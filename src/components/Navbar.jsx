import React from 'react'

export default function() {
    return (
        <nav>
            <div>
                <img class="shopping-cart" src="./public/cart.png" alt="shopping cart image"/>
                <a href="#">ShopCart</a>
            </div>
            <div>
                <button>Categories</button>
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
            <div>
            <i class="search-bar-icon">
                <span class="material-symbols-outlined">search</span>
            </i>
                <input class="search-bar" type="text" placeholder='Search Product'/>
            </div>
            <div>
                <span class="material-symbols-outlined">person</span>
                <a href="#">Account</a>
            </div>
            <div>
                <span class="material-symbols-outlined">shopping_cart</span>
                <a href="#">Cart</a>
            </div>
        </nav>
    )
}